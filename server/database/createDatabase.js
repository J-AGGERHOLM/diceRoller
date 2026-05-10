import "dotenv/config"
import db from "./connection.js";
import { hashPassword } from "../util/bcryptCompare.js";

const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
  await db.execute(`DROP TABLE IF EXISTS characters;`);
  await db.execute(`DROP TABLE IF EXISTS users;`);
}

/* Conventions for sql 
    use snake case
    plural for tables
    use lowercase for tables

*/

//DDL
await db.execute(`
    CREATE TABLE IF NOT EXISTS users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role ENUM('Admin', 'User')
    );
`);

await db.execute(`
  CREATE TABLE IF NOT EXISTS characters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    name VARCHAR(100),
    level INT NOT NULL DEFAULT 1,
    race VARCHAR(50),
    class_name VARCHAR(50),
    str_score INT,
    dex_score INT,
    con_score INT,
    int_score INT,
    wis_score INT,
    cha_score INT,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
`);

//DML
//seeding
if (deleteMode) {
  const hashedPassword = await hashPassword('secretPassword');

  //this was called parameterizing a query (?)
  //to prevent SQL injections.
  await db
    .execute(`INSERT INTO users (username, password, role) VALUES (?, ?, ?)`,
    ['admin01', hashedPassword, 'Admin']
    );
  await db
    .execute(`INSERT INTO users (username, password, role) VALUES (?, ?, ?)`,
    ['user01', hashedPassword, 'User']
    );

  await db.execute(
  `INSERT INTO characters (user_id, name, level, race, class_name, str_score, dex_score, con_score, int_score, wis_score, cha_score)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [1, 'Origrin Doomhammer', 1, 'Human', 'Fighter', 15, 12, 13, 8, 14, 11]
  );

  await db.execute(
  `INSERT INTO characters (user_id, name, level, race, class_name, str_score, dex_score, con_score, int_score, wis_score, cha_score)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [1, 'Gorrum Ashveil', 5, 'Dwarf', 'Cleric', 14, 8, 16, 10, 17, 9]
  );
}

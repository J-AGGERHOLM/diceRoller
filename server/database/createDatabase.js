import "dotenv/config"
import db from "./connection.js";
import { hashPassword } from "../util/bcryptCompare.js";

const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
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
}

import { Router } from "express"
import db from "../database/connection.js"

const router = Router();

// ================== character endpoints ================== //
//all characters for a user
router.get("/characters/:userid", async (req, res) => {

    const { userid } = req.params;

    const [response] = await db.execute(`SELECT * FROM characters WHERE user_id = ?`, 
        [userid]
    );
    
    res.send(response)

});

//get specific character
router.get("/characters/:userid/:characterid", async (req, res) => {

    const { userid, characterid } = req.params;

    const [response] = await db.execute(`SELECT * FROM characters WHERE user_id = ? AND id = ?`,
        [userid, characterid]
    );


    res.send(response);
});

// create new character
router.post("/characters", async (req, res) => {
    const { user_id, name, level, race, class_name } = req.body;

    await db.execute(`INSERT INTO characters (
        user_id, name, level, race, class_name)
        VALUES (?, ?, ?, ?, ?)`,
    [user_id, name, level, race, class_name]);

    res.send({ data: `${name} added to the database`})

});

//update character
router.put("/characters/:userid/:characterid", async (req, res) => {
    const { userid, characterid } = req.params;
    const { name, level, race, class_name, str_score, dex_score, con_score, int_score, wis_score, cha_score} = req.body;

    await db.execute(`UPDATE characters SET name = ?, level = ?, race = ?, class_name = ?, str_score = ?, dex_score = ?, con_score = ?, int_score = ?, wis_score = ?, cha_score = ?
        WHERE id = ? AND user_id = ?`,
    [name, level, race, class_name, str_score, dex_score, con_score, int_score, wis_score, cha_score, characterid, userid])

    res.send({ data: `${name} has been updated`})
});






export default router;
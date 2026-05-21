import { Router } from "express"
import db from "../database/connection.js"

const router = Router();

// ================== character endpoints ================== //
//all characters for a user
router.get("/characters", async (req, res) => {

    const userId = req.session.user_id;

    const [response] = await db.execute(`SELECT * FROM characters WHERE user_id = ?`, 
        [userId]
    );
    
    res.send(response)

});

//get specific character
router.get("/characters/:characterid", async (req, res) => {
    const { characterid } = req.params;

    const [response] = await db.execute(`SELECT * FROM characters WHERE id = ?`,
        [characterid]
    );

    //for websocket:
    req.session.characterName = response[0].name;


    res.send(response[0]);
});

// create new character
router.post("/characters", async (req, res) => {
    const user_id = req.session.user_id;
    const { name, level, race, class_name } = req.body;

    await db.execute(`INSERT INTO characters (
        user_id, name, level, race, class_name)
        VALUES (?, ?, ?, ?, ?)`,
    [user_id, name, level, race, class_name]);

    res.send({ data: `${name} added to the database`})

});

//update character
router.put("/characters/:characterid", async (req, res) => {
    const { characterid } = req.params;
    const { name, level, race, class_name, str_score, dex_score, con_score, int_score, wis_score, cha_score} = req.body;

    await db.execute(`UPDATE characters SET name = ?, level = ?, race = ?, class_name = ?, str_score = ?, dex_score = ?, con_score = ?, int_score = ?, wis_score = ?, cha_score = ?
        WHERE id = ?`,
    [name, level, race, class_name, str_score, dex_score, con_score, int_score, wis_score, cha_score, characterid])

    res.send({ data: `${name} has been updated` })
});

//delete character:
router.delete("/characters/:characterid", async (req, res) => {
    const { characterid } = req.params;

    await db.execute(`DELETE FROM characters WHERE id = ? `,
        [characterid])

    res.send({ data: `${characterid} has been deleted`})
})

export default router;
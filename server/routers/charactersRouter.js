import { Router } from "express"
import db from "../database/connection.js"

const router = Router();

//all characters for a user
router.get("/characters/:userid", async (req, res) => {

    const { userid } = req.params;

    const [response] = await db.execute(`SELECT * FROM characters WHERE user_id = ?`, 
        [userid]
    );
    
    res.send(response)

});

router.get("/characters/:userid/:characterid", async (req, res) => {

    const { userid, characterid } = req.params;

    const [response] = await db.execute(`SELECT * FROM characters WHERE user_id = ? AND id = ?`,
        [userid, characterid]
    );


    res.send(response);
});








export default router;
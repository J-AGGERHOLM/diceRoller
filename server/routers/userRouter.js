import { Router } from "express";
import db from "../database/connection.js";
import { hashPassword } from "../util/bcryptCompare.js";

const router = Router();

// ================== user endpoints ================== //

router.get("/users", async (req, res) => {
    const [response] = await db.execute(`SELECT * FROM users`)

    res.send(response)
})

router.get("/users/:userid", async (req, res) => {
    const { userid } = req.params;

    const [response] = await db.execute(`SELECT * FROM users where id = ?`,
        [userid]
    );

    res.send(response);
});


router.post("/users", async (req, res) => {
    const { username, password, role} = req.body;
    const hashedPassword = await hashPassword(password)

    const [response] = await db.execute(`INSERT INTO users (
        username, password, role)
        Values (?, ?, ?)`,
    [username, hashedPassword, role]
);

    res.send({data : "user has been added to the database"});
})


router.put("/users/:userid", async (req, res) => {
    const { userid } = req.params;
    const { username, password, role } = req.body;
    const hashedPassword = await hashPassword(password);

    await db.execute(`UPDATE users SET username = ?, password = ?, role = ? WHERE id = ?`,
        [username, hashedPassword, role, userid]
    );
    
    res.send({ data: "user was updated" });

});

router.delete("/users/:userid", async (req, res) => {
    const { userid } = req.params;
    
    await db.execute(`DELETE FROM users WHERE id = ?`,
        [userid]
    );
    res.send({ data: "user was deleted" });
});



export default router;
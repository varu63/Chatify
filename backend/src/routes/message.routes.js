import express from "express";

const router = express.Router();

router.get("/send" , (req , res) =>{
    res.send("sending message")
})

export default router;
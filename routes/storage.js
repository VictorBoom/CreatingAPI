const express = require("express");
const router = express.Router();

//TODO https://localhost/tracks CRUD Get, Post, Delet, Put

router.get("/", (req, res) => {
    const data = ["Soy","Storage"]
    res.send({data})
})

module.exports = router
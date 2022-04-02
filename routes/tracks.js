const express = require("express");
const router = express.Router();
const {getItems, getItem, createItems} = require("../controlers/tracks");
//TODO https://localhost/tracks CRUD Get, Post, Delet, Put

router.get("/", getItems);
//router.get("/:id", getItem); 
router.post("/", createItems)

module.exports = router
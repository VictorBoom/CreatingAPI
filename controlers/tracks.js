const {tracksModel} = require('../models');

//Retrieve list from DB
const getItems = async (req, res) =>{
    
    const data = await tracksModel.find({});
    res.send({data})
}
//Retrieve a detail from DB
const getItem = (req, res) =>{}
// Create an item in DB
const createItems = async (req, res) =>{
    const {body} = req
    console.log(body)
    const data = await tracksModel.create(body)
    //Controllers always need to return something
    res.send({data}) 
}
// Update an item in DB
const updateItems = (req, res) =>{}
// Delete an item in DB
const deleteItems = (req, res) =>{}


module.exports = {getItems, getItem, createItems, updateItems, deleteItems};
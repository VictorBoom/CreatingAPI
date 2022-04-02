const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; //absolut route of the file (from PC)

const removeExtension =  (filename) => {
    //TODO will take out the .js and will return only the name of the file
    return filename.split('.').shift()
}
// read the routes from my files and return an array with the routes
const text = fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file) // retrieve the name of the extension
    if(name !== 'index'){
        console.log(`Loading route ${name}`)
        router.use(`/${name}`, require(`./${file}`)) // when calling this in app.js will add the / and the name of the route and the data from the route
    }
}) 
console.log({text}) // print the routes

module.exports = router
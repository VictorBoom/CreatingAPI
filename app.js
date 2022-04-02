require("dotenv").config()

const express = require("express") //initiating web service
const cors = require("cors") 
const dbConnect = require('./config/mongo') //calling the functions from mongo
const app = express() // instantiating the app

app.use(cors()) //using cors library
app.use(express.json())

const port = process.env.PORT || 3000 //should be the environment variables

// Invoque routes
//TODO localhost/api/nameoftheroute
app.use("/api", require("./routes"))

//Listen to the port, if executed correctly, print
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect()
const multer = require("multer");
const express = require("express"); //Invoque express
const router = express.Router(); 


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)

    },
    filename: function(req, file, cb){

        const ext = file.originalname.split(".").pop(); //Split the string any time found a dot
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename)

    }
});

//When using an object where key an valye is the same use {}
const uploadMiddleware = multer({storage});

//TODO https://localhost/storage CRUD Get, Post, Delet, Put
router.post("/", uploadMiddleware.single("myfile"), (req, res) => {
    res.send({a:1})
})

module.exports = router
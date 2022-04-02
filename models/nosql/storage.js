const mongoose = require('mongoose')

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String,
            unique: true
        }
    },
    {
        timestamps:true, //TODO createAt, updatedA
        versionKey: false
    }
);

module.exports = mongoose.model("storages", StorageScheme)
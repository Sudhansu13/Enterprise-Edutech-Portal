const mongoose = require("mongoose");

const dbconnect=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log("the database is connected");
    }catch(err){
        console.log(err)
    }
}

module.exports = dbconnect
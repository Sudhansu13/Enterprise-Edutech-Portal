const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, min:6, max:20, required:true},
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ]
});

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String
    },
    image:{
        type:String,
        required:true,
        validator:{
            validate:function(v) {
                    // Basic URL validation using a regular expression
                    return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
                },
                message:(props)=>`${props.value} is not a valid url`
        }
    }
})

const User = mongoose.model('User',userSchema);
const Course = mongoose.model('Course',courseSchema);

module.exports = {User,Course};
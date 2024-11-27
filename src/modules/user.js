const mongoose = require("mongoose");
var validator = require('validator') 

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 100,
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value){
            console.log("Validating email:", value);
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address: " +value);
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            console.log("Checking strong password", value);
            if(!validator.isStrongPassword(value)){
                throw new Error("Password should be strong", +value);
            }
        }
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        },
    },
    photoUrl:{
        type: String,
        default: "https://www.kindpng.com/imgv/ioJmwwJ_dummy-profile-image-jpg-hd-png-download/",
        validate(value){
            console.log("Validating url:", value);
            if(!validator.isURL(value)){
                throw new Error("Invalid email address: " +value);
            }
        } 
    },
    about:{
        type: String,
        default: "This is a default about the user",
    },
    skills:{
        type: [String],
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
module.exports = User;

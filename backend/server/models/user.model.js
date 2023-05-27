const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: [true, "User Must Have a Fist Name"],
        minLength:[2, "Name need to be at least 2 character"]
    },
    last_name:{
        type: String,
        required: [true, "User must have a Last Name"],
        minLength:[2, "Name need to be at least 2 character"]
    },
    email:{
        type: String,
        required: [true, "User need an Email"],
    },
    age:{
        type: Number,
        required:[true, "Name need to be at least 2 character"],
        min:[0, "Not an age"]
    }
}, {timestamps:true})

const User = new mongoose.model("User", UserSchema);

module.exports = User;
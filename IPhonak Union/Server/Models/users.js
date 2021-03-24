const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const userSchema = new Schema({
    firstName:{
        type: String,
        required: "First name can\'t be empty"
    },
    lastName:{
        type: String,
        required: "Last name can\'t be empty"
    },
    email:{
        type:String,
        required: "Email can\'t be empty",
        unique:true
    },
    password:{
        type:String,
        required: "password Name can\'t be empty",
    },
    saltSecret:{
        type:String
    },
    cart:{
        type:Array
    }
})

// Pre Event
userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(this.password,salt,(err,hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXP
        });
}

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: {
        type: String,
        require: true 
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        required: true
    }

});


const user = mongoose.model('user', userschema);
module.exports = user;
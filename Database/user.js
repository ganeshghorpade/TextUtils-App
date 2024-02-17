const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email:String,
    phone:String,
    message:String
})

module.exports = mongoose.model('users',contactSchema);
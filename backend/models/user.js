
// add mongodb database and check server

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    }
})

const user = mongoose.model("users",userSchema);

module.exports = user;
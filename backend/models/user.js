const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fabricSchema = new Schema({
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

const user = mongoose.model("users",fabricSchema);

module.exports = user;
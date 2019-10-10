
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const user_schema = new Schema({
    email: {
      type: String,
      required: true  
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    relation: {
        type: Number
    },
    letter_of_recommendation: {
        type: String
    }
})

const Reference = mongoose.model('references', user_schema);
module.exports = Reference;


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
    cell_number: {
        type: Number
    },
    bio: {
        type: String
    }
})

const User = mongoose.model('user', user_schema);
module.exports = User;

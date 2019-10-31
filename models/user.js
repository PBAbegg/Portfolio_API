
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const user_schema = new Schema({
    user_id: {
      type: String,
      required: true  
    },
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

    //let focusedUser: '_id   ';
})

const User = mongoose.model('user', user_schema);
module.exports = User;

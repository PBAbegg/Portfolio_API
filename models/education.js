
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const user_schema = new Schema({
    user_id: {
        type: String,
        required: true  
      },
    degree_or_certification: {
      type: String,
      required: true  
    },
    institution: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

const Education = mongoose.model('education', user_schema);
module.exports = Education;
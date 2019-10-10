
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const user_schema = new Schema({
    company: {
      type: String,
      required: true  
    },
    position: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    years: {
        type: Number,
        required: true
    }
})

const WorkExperience = mongoose.model('work_experience', user_schema);
module.exports = WorkExperience;
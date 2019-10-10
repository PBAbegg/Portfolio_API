
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const user_schema = new Schema({
    project_name: {
      type: String,
      required: true 
    },
    link: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
})

const Project = mongoose.model('project', user_schema);
module.exports = Project;
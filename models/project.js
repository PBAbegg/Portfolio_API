
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const project_schema = new Schema({
    project_name: {
      type: String,
      required: true 
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Project = mongoose.model('project', project_schema);
module.exports = Project;
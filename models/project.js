
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const project_schema = new Schema({
    user_id: {
        type: String,  
      },
    project_name: {
      type: String,
      required: true 
    },
    link: {
        type: String,
        required: true
    },
    description: [{ 
        type: String 
    }],
    screen_shot: {
        type: String,
    }
})

const Project = mongoose.model('project', project_schema);
module.exports = Project;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const user_schema = new Schema({
    skill_name: {
      type: String,
      required: true 
    },
})

const Skill = mongoose.model('skills', user_schema);
module.exports = Skill;
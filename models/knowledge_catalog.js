
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const mongoose time stamp

const user_schema = new Schema({
    user_id: {
        type: String,
        required: true  
      },
    term: {
      type: String,
      required: true  
    },
    definition: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    }
})

const KnowledgeCatalog = mongoose.model('knowledge_catalog', user_schema);
module.exports = KnowledgeCatalog;

let express = require("express");
let router = express.Router();
const KnowledgeCatalog = require('../models/knowledge_catalog')


router.get("/", (req, res, next) =>{
  KnowledgeCatalog.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has occurred"})
    }
    res.json(data);
  })
});

router.get("/:id", (req, res, next) =>{
  KnowledgeCatalog.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has occurred"})
    }
    res.json(data);
  })
});

router.put("/:id", (req, res, next) =>{
  KnowledgeCatalog.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has occurred"})
    }
    res.json(data);
  })
});

router.post("/", (req, res, next) =>{
  KnowledgeCatalog.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has occurred"})
    }
    res.json(data);
  })
});

router.delete("/:id", (req, res, next) =>{
  KnowledgeCatalog.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has occurred"})
    }
    res.json(data);
  })
});


module.exports = router;
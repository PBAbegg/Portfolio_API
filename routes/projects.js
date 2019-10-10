let express = require("express");
let router = express.Router();
const Project = require('../models/projects')


router.get("/", (req, res, next) =>{
  Project.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.get("/:id", (req, res, next) =>{
  Project.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.put("/:id", (req, res, next) =>{
  Project.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.post("/", (req, res, next) =>{
  Project.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.delete("/:id", (req, res, next) =>{
  Project.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});


module.exports = router;

let express = require("express");
let router = express.Router();
const WorkExperience = require('../models/work_experience')


router.get("/", (req, res, next) =>{
  WorkExperience.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.get("/:id", (req, res, next) =>{
  WorkExperience.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.put("/:id", (req, res, next) =>{
  WorkExperience.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.post("/", (req, res, next) =>{
  WorkExperience.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.delete("/:id", (req, res, next) =>{
  WorkExperience.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});


module.exports = router;
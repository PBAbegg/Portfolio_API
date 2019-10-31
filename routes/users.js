let express = require("express");
let router = express.Router();
const User = require('../models/user')


router.get("/", (req, res, next) =>{
  User.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.get("/:id", (req, res, next) =>{
  User.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.put("/:id", (req, res, next) =>{
  User.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.post("/", (req, res, next) =>{
  User.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});

router.delete("/:id", (req, res, next) =>{
  User.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "you messed up"})
    }
    res.json(data);
  })
});


module.exports = router;

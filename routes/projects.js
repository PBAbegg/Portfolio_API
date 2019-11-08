let express = require("express");
let router = express.Router();
const Project = require('../models/project')


router.get("/", (req, res, next) =>{
  Project.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has accord"})
    }
    res.json(data);
  })
});

router.get("/:id", (req, res, next) =>{
  Project.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has accord"})
    }
    res.json(data);
  })
});

router.put("/:id", (req, res, next) =>{
  Project.find({}, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has accord"})
    }
    res.json(data);
  })
});

router.post("/", (req, res, next) =>{
  Project.create(req.body, function(err, data){
    if(err){
      return res.json({error:"code#", message: "An error has accord"})
    }
    res.json(data);
  })
});

router.delete("/:id", (req, res, next) =>{
  Project.findOneAndDelete({_id: req.params.id},
    function(err, data){
      if(err){
        return res.json({error:"code#", message: "An error has accord"})
    }
    res.json(data);
  })
});


module.exports = router;

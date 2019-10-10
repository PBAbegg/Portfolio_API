// let express = require("express");
// let router = express.Router();
// const User = require('../models/users')

// //TODO: this is a dummy profile for API creation
// const dummyProfile = {
//   _id: "12345",
//   name: "Joe Shmo",
//   email: "this@that.com",
//   cell: "555 555 5555",
//   bio: "me",
// };

// //TODO: return all dummy profiles
// // router.get("/", (req, res, next) => (user.find({}, function(err,data){

// // })));

// router.get("/", (req, res, next) =>{
//   User.find({}, function(err, data){
//     if(err){
//       return res.json({error:"code#", message: "you messed up"})
//     }
//     res.json(data);
//   })
// });

// //TODO: return ONE dummy profile
// router.get("/:id", (req, res, next) => res.json(dummyProfile));

// //TODO: update dummy profile
// router.put("/:id", (req, res, next) => res.json(dummyProfile));

// //TODO: create dummy profile
// router.post("/", (req, res, next) => res.json(dummyProfile));

// //TODO: remove dummy profile
// router.delete("/:id", (req, res, next) => res.json(dummyProfile));

// //TODO: need to build mongoose schema

// module.exports = router;

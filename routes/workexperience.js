let express = require("express");
let router = express.Router();

//TODO build Mongoose shcema
//TODO: this is a dummy profile for API creation
const dummyWorkExperience = {
  _id: "2468",
  company: "Company",
  position: "Worker",
  description: "what I did",
  yearsEmployed: "1999-2010"
};

//TODO: return all dummy profiles
router.get("/", (req, res, next) => res.json(dummyWorkExperience));

//TODO: return ONE dummy profile
router.get("/:id", (req, res, next) => res.json(dummyWorkExperience));

//TODO: update dummy profile
router.put("/:id", (req, res, next) => res.json(dummyWorkExperience));

//TODO: create dummy profile
router.post("/", (req, res, next) => res.json(dummyWorkExperience));

//TODO: remove dummy profile
router.delete("/:id", (req, res, next) => res.json(dummyWorkExperience));

//TODO: need to build mongoose schema

module.exports = router;

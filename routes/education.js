let express = require("express");
let router = express.Router();

//TODO build Mongoose shcema
//TODO: this is a dummy profile for API creation
const dummyEducation = {
  _id: "2468",
  institution: "School",
  degreeCertificate: "BS Comp-Sci",
  year: "2018"
};

//TODO: return all dummy profiles
router.get("/", (req, res, next) => res.json(dummyEducation));

//TODO: return ONE dummy profile
router.get("/:id", (req, res, next) => res.json(dummyEducation));

//TODO: update dummy profile
router.put("/:id", (req, res, next) => res.json(dummyEducation));

//TODO: create dummy profile
router.post("/", (req, res, next) => res.json(dummyEducation));

//TODO: remove dummy profile
router.delete("/:id", (req, res, next) => res.json(dummyEducation));

//TODO: need to build mongoose schema

module.exports = router;

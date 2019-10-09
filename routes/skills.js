let express = require("express");
let router = express.Router();

//TODO build Mongoose shcema
//TODO: this is a dummy profile for API creation
const dummySkills = {
  _id: "2468",
  name: "PHP",
};

//TODO: return all dummy profiles
router.get("/", (req, res, next) => res.json(dummySkills));

//TODO: return ONE dummy profile
router.get("/:id", (req, res, next) => res.json(dummySkills));

//TODO: update dummy profile
router.put("/:id", (req, res, next) => res.json(dummySkills));

//TODO: create dummy profile
router.post("/", (req, res, next) => res.json(dummySkills));

//TODO: remove dummy profile
router.delete("/:id", (req, res, next) => res.json(dummySkills));

//TODO: need to build mongoose schema

module.exports = router;

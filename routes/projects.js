let express = require("express");
let router = express.Router();

//TODO build Mongoose shcema
//TODO: this is a dummy profile for API creation
const dummyProject = {
  _id: "123",
  name: "My Project",
  link: "this.com",
  about: "a project"
};

//TODO: return all dummy profiles
router.get("/", (req, res, next) => res.json(dummyProject));

//TODO: return ONE dummy profile
router.get("/:id", (req, res, next) => res.json(dummyProject));

//TODO: update dummy profile
router.put("/:id", (req, res, next) => res.json(dummyProject));

//TODO: create dummy profile
router.post("/", (req, res, next) => res.json(dummyProject));

//TODO: remove dummy profile
router.delete("/:id", (req, res, next) => res.json(dummyProject));

//TODO: need to build mongoose schema

module.exports = router;

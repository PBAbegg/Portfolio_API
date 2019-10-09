let express = require("express");
let router = express.Router();

//TODO build Mongoose shcema
//TODO: this is a dummy profile for API creation
const dummyKnowledge = {
  _id: "000",
  term: "react",
  definition: "website",
  tag: "js"
};

//TODO: return all dummy profiles
router.get("/", (req, res, next) => res.json(dummyKnowledge));

//TODO: return ONE dummy profile
router.get("/:id", (req, res, next) => res.json(dummyKnowledge));

//TODO: update dummy profile
router.put("/:id", (req, res, next) => res.json(dummyKnowledge));

//TODO: create dummy profile
router.post("/", (req, res, next) => res.json(dummyKnowledge));

//TODO: remove dummy profile
router.delete("/:id", (req, res, next) => res.json(dummyKnowledge));

//TODO: need to build mongoose schema

module.exports = router;

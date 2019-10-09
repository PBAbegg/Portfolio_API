let express = require("express");
let router = express.Router();

//TODO build Mongoose shcema
//TODO: this is a dummy profile for API creation
const dummyReferences = {
  _id: "123",
  name: "Ben Drownd",
  number: "555-5555",
  email: "doo@dee.dum",
  relation: "coworker",
  letterOfRecommendation: "he is good"
};

//TODO: return all dummy profiles
router.get("/", (req, res, next) => res.json(dummyReferences));

//TODO: return ONE dummy profile
router.get("/:id", (req, res, next) => res.json(dummyReferences));

//TODO: update dummy profile
router.put("/:id", (req, res, next) => res.json(dummyReferences));

//TODO: create dummy profile
router.post("/", (req, res, next) => res.json(dummyReferences));

//TODO: remove dummy profile
router.delete("/:id", (req, res, next) => res.json(dummyReferences));

//TODO: need to build mongoose schema

module.exports = router;

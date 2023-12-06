const express = require("express");
const router = express.Router();
const {
  GetPerson,
  createPerson,
} = require("../controllers/Person.Controller");
router.get("/", GetPerson);
router.post("/", createPerson);

module.exports = router;
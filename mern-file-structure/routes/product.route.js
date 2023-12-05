const express = require("express");
const router = express.Router();
const {
  GetProduct,
  createProduct,
} = require("../controllers/Product.controller");
router.get("/", GetProduct);
router.post("/", createProduct);

module.exports = router;

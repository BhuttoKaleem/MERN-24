const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    available:String,
    category: { type:String, enum:['food','PC','cloth']},
    price: Number,
    name: String,
  });

  const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
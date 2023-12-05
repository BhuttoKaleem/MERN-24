const ProductModel = require("../models/Product.model");
// export 1. way 1 :: adding export with functions
const createProduct = async (available, category, price,name) => {
  return await ProductModel.create({ available, category,price, name });
};

const getProduct = async () => {
  return await ProductModel.find();
};

module.exports = {
  createProduct,
  getProduct,
};

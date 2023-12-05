const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getProduct,
    createProduct,
  } = require("../services/Product.service");

exports.GetProduct = catchAsyncError(async (req, res, next) => {
    // throw new CustomError("not found", 404);
    const product = await getProduct();
    res.json(product);
  });


  exports.createProduct = async (req, res, next) => {
    const { available,category,price,name  } = req.body;
    const product = await createProduct(available, category,price,name);
    res.json(product);
  };
  
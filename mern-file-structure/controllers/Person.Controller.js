const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getPerson,
    createPerson,
  } = require("../services/Person.service");

exports.getPerson = catchAsyncError(async (req, res, next) => {
    // throw new CustomError("not found", 404);
    const person = await getPerson();
    res.json(product);
  });


  exports.createPerson = async (req, res, next) => {
    const { userName,role,email  } = req.body;
    const person = await createPerson(username, role,email);
    res.json(product);
  };
  
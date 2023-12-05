const PersonModel = require("../models/Person.model");
// export 1. way 1 :: adding export with functions
const createPerson = async (userName, role, email) => {
  return await PersonModel.create({ userName, role, email });
};

const getPerson = async () => {
  return await PersonModel.find();
};

module.exports = {
  createPerson,
  getPerson,
};
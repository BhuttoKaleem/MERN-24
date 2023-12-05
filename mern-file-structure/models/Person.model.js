const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    userName:String,
    role: { type:String, enum:['user','admin']},
    email: String,
  });

  const PersonModel = mongoose.model("persons", PersonSchema);
module.exports = PersonModel;
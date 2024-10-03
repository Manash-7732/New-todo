const mongoose = require("mongoose");

const createdSchema = new mongoose.Schema({
  title: String, // Correct capitalization
  description: String, // Correct capitalization
  completed: Boolean, // Correct capitalization
});

const User = mongoose.model("User", createdSchema);

module.exports = User;

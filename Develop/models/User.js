const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  friends: {
    type: [String],
    required: false,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

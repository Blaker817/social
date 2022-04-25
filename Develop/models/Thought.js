const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thoughSchema = new Schema({
  thought_text: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  username: {
    type: String,
    required: true,
  },
});

const Thought = mongoose.model("Thought", thoughSchema);

module.exports = Thought;

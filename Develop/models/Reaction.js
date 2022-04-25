
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    reactionId: {
        type: ObjectId
    },
  reactionBody: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default:Date.now
  },
  username: {
    type: String,
    required: true,
  },
});

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
const mongoose = require("mongoose");
const Place = require('../models/places')

const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    default: "Anonymous",
  },
  rant: {
    type: Boolean,
    default: false,
  },
  stars: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place'
  }
});

module.exports = mongoose.model("Comment", commentSchema);

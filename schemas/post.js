const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  writer: {
      type: String,
      required: true
  },
  pw: {
    type: Number,
    required: true
  },
  contents: {
    type: String,
    required: true
  },
  postTime: {
      type: String,
      required: true,
      unique: true
  }
});

module.exports = mongoose.model("post", postSchema);
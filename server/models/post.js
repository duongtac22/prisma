const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    createAt: {
      type: Date,
      required: false,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      required: false,
      default: Date.now,
    },
  },
  { collection: "Post" }
);

module.exports = mongoose.model("Post", postsSchema);

const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/getAll", async (req, res) => {
  try {
    const data = await Post.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

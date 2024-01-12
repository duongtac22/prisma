const express = require("express");
const router = express.Router();
const post = require("../models/post");

router.get("/post", async (req, res) => {
  try {
    const data = await post.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

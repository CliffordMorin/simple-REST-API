const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.get("/:id", (req, res) => {
  res.send("We are on a post");
});

module.exports = router;

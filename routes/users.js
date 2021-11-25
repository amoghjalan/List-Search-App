const express = require("express");
const router = express.Router();


const User = require("../modals/User");

// @route    GET api/users
// @desc     Get all users
// @acess    Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({
      name: 1
    });
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;

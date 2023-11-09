const User = require('../models/user'); // Adjust the path according to your project structure.
const asyncHandler = require("express-async-handler");

exports.submitSignUpForm = asyncHandler(async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });
    const result = await user.save();
    res.redirect("/");
  } catch(err) {
    return next(err);
  };
});
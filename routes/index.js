var express = require('express');
var router = express.Router();
const passport = require('passport'); // Make sure passport is required
const userController = require("../controllers/userController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/sign-up", (req, res) => res.render("sign-up-form"));

router.post("/sign-up", userController.submitSignUpForm);

router.get("/log-in", (req, res) => res.render("log-in"))

// Log-in route
router.post("/log-in", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/"
}));

module.exports = router;

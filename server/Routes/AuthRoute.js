const express = require("express");
const router = express.Router();
const { SignUp, SignIn, Google } = require("../controller/AuthController");

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);
router.route("/google").post(Google);

module.exports = router;

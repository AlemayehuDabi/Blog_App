const express = require("express");
const router = express.Router();
const { SignUp, SignIn } = require("../controller/AuthController");

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);

module.exports = router;

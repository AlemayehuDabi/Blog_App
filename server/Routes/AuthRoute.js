const express = require("express");
const router = express.Router();
const { SignUp } = require("../controller/AuthController");

router.route("/signup").post(SignUp);

module.exports = router;

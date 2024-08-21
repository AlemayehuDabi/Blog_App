const bcryptjs = require("bcryptjs");
const User = require("../Model/UserModel/UserModel");
const errorHandler = require("../util/Error");
const jwt = require("jsonwebtoken");

// signup
const SignUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password == ""
    ) {
      return next(errorHandler(400, "All field are required"));
    }

    const isUser = await User.findOne({
      email,
    });

    if (isUser) {
      return next(errorHandler(400, "user is already registered"));
    }

    const hassedPassword = bcryptjs.hashSync(password, 10);

    const user = await User.create({
      username,
      email,
      password: hassedPassword,
    });

    const token = jwt.sign(
      {
        username: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1W",
      }
    );

    const { password: pass, ...rest } = user._doc;

    return res
      .status(200)
      .cookie("Access_Token", token, {
        httpOnly: true,
      })
      .json({
        status: true,
        msg: "success",
        rest,
      });
  } catch (error) {
    return next(error);
  }
};

const SignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password || email === "" || password === "") {
      return next(errorHandler(400, "all crediential is required"));
    }

    const isUser = await User.findOne({
      email,
    });

    if (!isUser) {
      return next(errorHandler(404, "user is not registered"));
    }

    const validCrediential = bcryptjs.compareSync(password, isUser.password);

    if (!validCrediential) {
      return next(errorHandler(400, "crediential is not correct"));
    }

    const token = jwt.sign(
      {
        username: isUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1W",
      }
    );

    const { password: pass, ...rest } = isUser._doc;

    return res
      .status(200)
      .cookie("Access_Token", token, {
        httpOnly: true,
      })
      .json({
        status: true,
        message: "successfuly loged in",
        rest,
      });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  SignUp,
  SignIn,
};

const bcryptjs = require("bcryptjs");
const User = require("../Model/UserModel/UserModel");
const errorHandler = require("../middleware/errorMiddleWare");

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
      next(errorHandler(400, "All field are required"));
    }

    const isUser = await User.findOne({
      email,
    });

    if (isUser) {
      next(errorHandler(401, "user is already registered"));
    }

    const hassedPassword = bcryptjs.hashSync(password, 10);

    const user = await User.create({
      username,
      email,
      password: hassedPassword,
    });

    return res.json({
      status: true,
      msg: "success",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  SignUp,
};

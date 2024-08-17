const bcryptjs = require("bcryptjs");
const User = require("../Model/UserModel/UserModel");

// signup
const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
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
        email: user.username,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  SignUp,
};

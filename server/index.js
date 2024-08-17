const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const authRouter = require("./Routes/AuthController");
const errorMiddle = require("./middleware/errorMiddleWare");

// dotenv
PORT = process.env.PORT;
MONGO_URL = process.env.MONGO_URL;

// api
app.use("/api/auth", authRouter);

// middleware
app.use(errorMiddle);

// mongodb connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

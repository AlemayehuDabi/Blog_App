require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./Routes/AuthRoute");
const errorMiddle = require("./middleware/errorMiddleWare");
// const cors = require("cors"); using fetch api no cors
// json
app.use(express.json());

// dotenv
PORT = process.env.PORT;
MONGO_URL = process.env.MONGO_URL;

// cors
// app.use(cors("http://localhoast:5173"));

// api
app.use("/api/auth", authRouter);

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

// middleware
app.use(errorMiddle);

const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// dotenv
PORT = process.env.PORT;
MONGO_URL = process.env.MONGO_URL;

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

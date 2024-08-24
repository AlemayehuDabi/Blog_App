const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unqiue: true,
    },
    email: {
      type: String,
      required: true,
      unqiue: true,
    },
    password: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjowE9FnDzM2YQter8bpRMQ45ay3xPWkO1AKuc0YKSpev0wc6ihUxL0W-OegJzPXWUWy8&usqp=CAU",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

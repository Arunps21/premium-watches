const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: { type: String },
  email: { type: String },
  password: { type: String },
  cart: { type: Array, default: [] },
  orders: { type: Array, default: [] },
  contact: { type: Number },
  picture: { type: String },
});

const userModel = mongoose.model("user",userSchema)

module.exports = userModel
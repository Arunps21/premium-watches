const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  fullname: { type: String },
  email: { type: String },
  password: { type: String },
  products: { type: Array, default: [] },
  picture: { type: String },
  gstin: { type: String },
});

const ownerModel = mongoose.model("owner", ownerSchema);

module.exports = ownerModel;

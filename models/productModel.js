const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: { type: Buffer },
  name: { type: String },
  price: { type: Number },
  discount: { type: Number, default: 0 },
  bgColor: { type: String },
  panelColor: { type: String },
  textColor: { type: String },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;

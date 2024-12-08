const productModel = require("../models/productModel");

const indexFun = (req, res) => {
  let error = req.flash("error");
  res.render("index", { error });
};

const shopFun = async (req, res) => {
  try {
    let success = req.flash("success")
    let products = await productModel.find();
    res.render("shop", { success, products });
  } catch (err) {
    console.log(err.meassage);
  }
};

module.exports = { indexFun, shopFun };

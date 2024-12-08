const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const { name, price, discount, bgColor, panelColor, textColor } = req.body;
    await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgColor,
      panelColor,
      textColor,
    });
    req.flash("success", "Product added succesfully.");
    res.redirect("/owner/admin");
  } catch (err) {
    console.log(err.message);
  }
};


module.exports = { createProduct }
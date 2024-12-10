const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const indexFun = (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, loggedIn: false });
};

const shopFun = async (req, res) => {
  try {
    let success = req.flash("success");
    let products = await productModel.find();
    res.render("shop", { success, products });
  } catch (err) {
    console.log(err.meassage);
  }
};

const addToCart=async(req,res)=>{
  try{
    let user = await userModel.findOne({email : req.user.email})
    user.cart.push(req.params.id)
    await user.save();
    req.flash("success","Added to Cart")
    res.redirect("/shop")
  }
  catch(err){
    console.log(err.message)
  }
}

module.exports = { indexFun, shopFun, addToCart };

const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const isLoggedIn = async (req, res, next) => {
  if (!req.cookies.token) {
    req.flash("error", "You need to login first");
    return res.redirect("/");
  }

  try {
    const decode = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    const user = await userModel
      .findOne({ email: decode.email })
      .select("-password");

    if (!user) {
      req.flash("error", "User not found");
      return res.redirect("/");
    }

    req.user = user;
    next();
  } catch (err) {
    req.flash("error", "Something went wrong");
    console.error(err.message);
    res.redirect("/");
  }
};

module.exports = { isLoggedIn };

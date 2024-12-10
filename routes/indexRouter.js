const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const { indexFun, shopFun, addToCart } = require("../controllers/indexController");

router.route("/").get(indexFun);
router.route("/shop").get(isLoggedIn,shopFun)
router.route("/addtocart/:id").get(isLoggedIn,addToCart)

module.exports = router;

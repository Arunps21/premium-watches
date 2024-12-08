const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const { indexFun, shopFun } = require("../controllers/indexController");

router.route("/").get(indexFun);
router.route("/shop").get(isLoggedIn,shopFun)

module.exports = router;

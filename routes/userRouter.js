const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  userLogout,
} = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("Hey");
});

router.route("/register").post(userRegister);
router.route("/login").post(userLogin);
router.route("/logout").get(userLogout);

module.exports = router;

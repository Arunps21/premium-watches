const ownerModel = require("../models/ownerModel");

const ownerCreate = async (req, res) => {
  const { fullname, email, password } = req.body;
  let owner = await ownerModel.find();
  if (owner.length > 0) {
    res.status(403).send("You don't have the permission to create");
  } else {
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(200).json(createdOwner);
  }
};

const productPanel=(req,res)=>{
    let success = req.flash("success")
    res.render("createproducts",{success})
}

module.exports = { ownerCreate,productPanel };

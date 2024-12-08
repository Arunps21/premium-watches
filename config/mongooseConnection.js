const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGO_URI}/premium_watches`)
  .then(() => {
    console.log("Server connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error in connecting MongoDB", err);
  });
  

module.exports = mongoose.Connection
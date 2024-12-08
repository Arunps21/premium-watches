const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const expressionSession = require("express-session");
const flash = require("connect-flash");
require("dotenv").config();
const db = require("./config/mongooseConnection");
const indexRouter = require("./routes/indexRouter")
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const ownerRouter = require("./routes/ownerRouter");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
  expressionSession({
    saveUninitialized: false,
    resave: false,
    secret: process.env.EXPRESS_SESSION_KEY,
  })
);
app.use(flash());
app.use("/",indexRouter)
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/owner", ownerRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server run at http://localhost:${process.env.PORT}`);
});

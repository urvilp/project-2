const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const apiRoutes = require("./controllers/apiRoutes");
const employeeRoutes = require("./controllers/employeeRoutes");
const employerRoutes = require("./controllers/employerRoutes");
const userCtrl = require("./controllers/users");
const db = mongoose.connection;
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
require("./config/passport");

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/api", apiRoutes);
app.use("/employee", employeeRoutes);
app.use("/employer", employerRoutes);
app.use(cookieParser());
app.use(
  session({
    secret: "SEIRocks!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", userCtrl);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/employer",
    failureRedirect: "/",
  })
);

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

db.on("connected", () => {
  app.listen(port, () => {
    console.log(`server running on http//:localhost:${port}`);
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });
});

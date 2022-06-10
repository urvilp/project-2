const express = require("express");
const employeeRoutes = require("./controllers/employeeRoutes");
const employerRoutes = require("./controllers/employerRoutes");
const apiRoutes = require("./controllers/apiRoutes");
const mongoose = require("mongoose");
const db = mongoose.connection;
const app = express();
const port = 5000;

require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/api", apiRoutes);
app.use("/employee", employeeRoutes);
app.use("/employer", employerRoutes);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.render("home");
});

db.on("connected", () => {
  app.listen(port, () => {
    console.log(`server running on http//:localhost:${port}`);
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });
});

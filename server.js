const express = require("express");
const employeeRoutes = require("./controllers/employeeRoutes");
const employerRoutes = require("./controllers/employerRoutes");
const apiRoutes = require("./controllers/apiRoutes");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/employee", employeeRoutes);
app.use("/employer", employerRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () =>
  console.log(`server running on http//:localhost:${port}`)
);

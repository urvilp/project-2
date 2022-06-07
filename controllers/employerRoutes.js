const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("employer");
});

routes.get("/details", (req, res) => {
  res.render("details");
});

module.exports = routes;

const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("employee");
});

routes.get("/form", (req, res) => {
  res.render("form");
});

routes.get("/confirm", (req, res) => {
  res.render("confirm");
});

module.exports = routes;

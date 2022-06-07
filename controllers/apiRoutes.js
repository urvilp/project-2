const express = require("express");
const routes = express.Router();

routes.get("/employee", (req, res) => {
  res.send("hello");
});

routes.get("/employee/:id", (req, res) => {
  res.send("hello");
});

routes.post("/employee", (req, res) => {
  res.send("hello");
});

routes.put("/employee/:id", (req, res) => {
  res.send("hello");
});

routes.delete("/employee/:id", (req, res) => {
  res.send("hello");
});

module.exports = routes;

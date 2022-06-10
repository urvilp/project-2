const express = require("express");
const routes = express.Router();
const Application = require("../models/Application");

routes.get("/application", (req, res) => {
  res.send("hello");
});

routes.get("/application/:id", (req, res) => {
  res.send("hello");
});

routes.post("/application", async (req, res) => {
  const {
    firstName,
    lastName,
    street,
    city,
    state,
    zip,
    phone,
    email,
    gender,
    dob,
    qualification,
    education,
  } = req.body;
  const application = new Application({
    firstName,
    lastName,
    street,
    city,
    state,
    zip,
    phone,
    email,
    gender,
    dob,
    qualification,
    education,
  });
  await application.save();
  res.send(application);
});

routes.put("/application/:id", (req, res) => {
  res.send("hello");
});

routes.delete("/application/:id", (req, res) => {
  res.send("hello");
});

module.exports = routes;

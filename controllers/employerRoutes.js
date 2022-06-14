const express = require("express");
const routes = express.Router();
const Application = require("../models/Application");

routes.get("/", async (req, res) => {
  const applications = await Application.find();
  res.render("employer", { applications: applications });
});

routes.get("/details/:id", async (req, res) => {
  try {
    const application = await Application.findOne({ _id: req.params.id });
    res.render("details", { application: application });
  } catch {
    res.status(404);
    res.send({ error: "post doesn't exist!" });
  }
});

module.exports = routes;

const express = require("express");
const routes = express.Router();
const Application = require("../models/Application");

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
  res.redirect("/employee/confirm");
});

routes.put("/application/:id", async (req, res) => {
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
  try {
    const application = await Application.findOne({ _id: req.params.id });
    if (firstName) {
      application.firstName = firstName;
    }
    if (lastName) {
      application.lastName = lastName;
    }
    if (street) {
      application.street = street;
    }
    if (city) {
      application.city = city;
    }
    if (state) {
      application.state = state;
    }
    if (zip) {
      application.zip = zip;
    }
    if (phone) {
      application.phone = phone;
    }
    if (email) {
      application.email = email;
    }
    if (gender) {
      application.gender = gender;
    }
    if (dob) {
      application.dob = dob;
    }
    if (qualification) {
      application.qualification = qualification;
    }
    if (education) {
      application.education = education;
    }
    await application.save();
    res.send(application);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist" });
  }
});

routes.delete("/application/:id", async (req, res) => {
  try {
    await Application.deleteOne({ _id: req.params.id });
    res.redirect("/employer");
  } catch {
    res.status(404);
    res.send({ error: "post doesn't exist!" });
  }
});

module.exports = routes;

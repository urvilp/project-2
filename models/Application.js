const mongoose = require("mongoose");

const application = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  street: { type: String, require: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
  zip: { type: Number, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  gender: { type: String, require: true },
  dob: { type: Number, require: true },
  qualification: { type: String, require: true },
  education: { type: String, require: true },
});

module.exports = mongoose.model("Application", application);

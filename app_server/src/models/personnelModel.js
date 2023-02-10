const mongoose = require('mongoose');

const personnelSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  gender: { type: String },
  picture: { type: String, required: false },
});

const Personnel = mongoose.model('Personnel', personnelSchema);

module.exports = Personnel;

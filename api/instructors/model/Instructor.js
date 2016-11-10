'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorModel = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: false }
});

module.exports = mongoose.model('Instructor', instructorModel);
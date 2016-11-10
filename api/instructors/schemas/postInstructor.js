'use strict';

const Joi = require('joi');

const postInstructorSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  company: Joi.string().required()
});

module.exports = postInstructorSchema;
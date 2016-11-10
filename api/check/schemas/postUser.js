'use strict';

const Joi = require('joi');

const checkUserSchema = Joi.object({
  username: Joi.string(),
  email: Joi.string()
});

module.exports = checkUserSchema;
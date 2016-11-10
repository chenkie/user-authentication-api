'use strict';

const Joi = require('joi');

const authenticateUserSchema = Joi.alternatives().try(
  Joi.object({
    user: Joi.string().alphanum().min(2).max(30).required(),
    password: Joi.string().required()
  }),
  Joi.object({
    user: Joi.string().email().required(),
    password: Joi.string().required()
  })
);

module.exports = authenticateUserSchema;
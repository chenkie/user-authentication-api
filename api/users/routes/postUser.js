'use strict';

const bcrypt = require('bcrypt');
const Boom = require('boom');
const User = require('../model/User');
const postUserSchema = require('../schemas/postUser');
const verifyUniqueUser = require('../../../util/userFunctions').verifyUniqueUser;
const createToken = require('../../../util/token');

function hashPassword(password, cb) {
  // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });
}

module.exports = {
  method: 'POST',
  path: '/api/users',
  config: {
    auth: false,
    // Before the route handler runs, verify that the user is unique
    pre: [
      { method: verifyUniqueUser }
    ],
    handler: (req, res) => {

      let user = new User();
      user.email = req.payload.email;
      user.username = req.payload.username;
      user.admin = req.payload.admin || false;
      hashPassword(req.payload.password, (err, hash) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        user.password = hash;
        user.save((err, user) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          // If the user is saved successfully, issue a JWT
          res({ token: createToken(user) });
        });
      });

    },
    // Validate the payload against the Joi schema
    validate: {
      payload: postUserSchema
    }
  }
}

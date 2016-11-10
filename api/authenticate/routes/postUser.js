'use strict';

const Boom = require('boom');
const User = require('../../users/model/User');
const postUserSchema = require('../schemas/postUser');
const verifyCredentials = require('../../../util/userFunctions').verifyCredentials;
const createToken = require('../../../util/token');

module.exports = {
  method: 'POST',
  path: '/api/users/authenticate',
  config: {
    auth: false,
    // Check the user's password against the DB
    pre: [
      { method: verifyCredentials, assign: 'user' }
    ],
    handler: (req, res) => {
      // If the user's password is correct, we can issue a token.
      // If it was incorrect, the error will bubble up from the pre method
      res({ token: createToken(req.pre.user) });
    },
    validate: {
      payload: postUserSchema
    }
  }  
}

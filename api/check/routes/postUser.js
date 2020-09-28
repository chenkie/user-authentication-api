'use strict';

const postUserSchema = require('../schemas/postUser');
const verifyUniqueUser = require('../../../util/userFunctions')
  .verifyUniqueUser;

module.exports = {
  method: 'POST',
  path: '/api/users/check',
  config: {
    auth: false,
    pre: [{ method: verifyUniqueUser, assign: 'user' }],
    handler: (req, res) => {
      res(req.pre.user);
    },
    // Validate the payload against the Joi schema
    validate: {
      payload: postUserSchema
    }
  }
};

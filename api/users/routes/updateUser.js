'use strict';

const Boom = require('boom');
const User = require('../model/User');
const updateUserSchema = require('../schemas/updateUser');
const verifyUniqueUser = require('../../../util/userFunctions').verifyUniqueUser;

module.exports = {
  method: 'PATCH',
  path: '/api/users/{id}',
  config: {
    pre: [
      { method: verifyUniqueUser, assign: 'user' }
    ],
    auth: {
      strategy: 'jwt',
      scope: ['admin']
    },
    handler: (req, res) => {
      const id = req.params.id;
      User
        .findOneAndUpdate({ _id: id }, req.pre.user, (err, user) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!user) {
            throw Boom.notFound('User not found!');
          }
          res({message: 'User updated!'});
        });      
    },
    validate: {
      payload: updateUserSchema.payloadSchema,
      params: updateUserSchema.paramsSchema
    }
  }
  
}
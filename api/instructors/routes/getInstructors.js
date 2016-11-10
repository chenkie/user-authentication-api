'use strict';

const Instructor = require('../model/Instructor');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/instructors',
  config: {
    auth: {
      strategy: 'jwt'
    },
    handler: (req, res) => {
      Instructor
        .find()
        // Deselect the password and version fields
        .select('-__v')
        .exec((err, data) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!data.length) {
            throw Boom.notFound('No instructors found!');
          }

          res(data);
        });
    }
  }
}
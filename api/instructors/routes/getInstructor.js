'use strict';

const Instructor = require('../model/Instructor');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/instructors/{id}',
  config: {
    auth: {
      strategy: 'jwt'
    },
    handler: (req, res) => {
      
      const _id = req.params.id;

      Instructor
        .findOne({ _id })
        // Deselect the password and version fields
        .select('-__v')
        .exec((err, data) => {
          if (err) {
            res(Boom.badRequest(err));
          }
          if (!data) {
            res(Boom.notFound('Instructor not found!'));
          }
          res(data);
        });
    }
  }
}
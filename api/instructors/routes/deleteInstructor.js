'use strict';

const Boom = require('boom');
const Instructor = require('../model/Instructor');
const deleteInstructorSchema = require('../schemas/deleteInstructor');

module.exports = {
  method: 'DELETE',
  path: '/api/instructors/{id}',
  config: {
    auth: {
      strategy: 'jwt',
      scope: ['admin']
    },
    handler: (req, res) => {

      const _id = req.params.id;

      Instructor
        .findOneAndRemove({ _id })
        .exec((err, data) => {
          if (err) {
            throw Boom.badRequest(err);
          }

          if (!data) {
            throw Boom.notFound('Instructor not found!');
          }
          
          res({ message: 'Instructor deleted!' });
        });     

    },
    // Validate the payload against the Joi schema
    validate: {
      params: deleteInstructorSchema
    }
  }
}
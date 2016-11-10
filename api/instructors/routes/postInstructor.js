'use strict';

const Boom = require('boom');
const Instructor = require('../model/Instructor');
const postInstructorSchema = require('../schemas/postInstructor');

module.exports = {
  method: 'POST',
  path: '/api/instructors',
  config: {
    auth: {
      strategy: 'jwt',
      scope: ['admin']
    },
    handler: (req, res) => {

      let instructor = new Instructor(req.payload);

      instructor.save((err, data) => {
        if (err) {
          res(Boom.badRequest(err));
          return;
        }

        res({ message: 'Instructor created!', data }).code(201);
      });      

    },
    // Validate the payload against the Joi schema
    validate: {
      payload: postInstructorSchema
    }
  }
}

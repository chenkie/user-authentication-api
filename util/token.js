'use strict';

const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const createGravatarUrl = require('./createGravatar');

function createToken(user) {
  let scope;
  // Check if the user object passed in
  // has admin set to true, and if so, set
  // scopes to admin
  if (user.admin) {
    scope = 'admin';
  }

  // Sign the JWT
  return jwt.sign({
    sub: user.id,
    username: user.username,
    email: user.email,
    gravatar: createGravatarUrl(user.email),
    scope
  }, secret, { 
    algorithm: 'HS256',
    expiresIn: "1h" 
  });
}

module.exports = createToken;
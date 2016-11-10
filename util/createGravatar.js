'use strict';

const md5 = require('md5');

function createGravatarUrl(email) {
  return `https://www.gravatar.com/avatar/${md5(email).toLowerCase().trim()}`;
}

module.exports = createGravatarUrl;
/*
 * Joe Ivans, student, Code Fellows Seattle
 */

'use strict';

module.exports =
  async function getNotFound(request, response) {
    response.status(404).send('I can\'t find it.');
  };

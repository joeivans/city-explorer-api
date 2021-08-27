/*
 * Joe Ivans, student, Code Fellows Seattle
 */

'use strict';

module.exports = function getHealthCheck(request, response) {
  console.log(Date.now());
  response.send('healthy');
};

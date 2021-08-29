/*
 * Joe Ivans, student, Code Fellows Seattle
 */

'use strict';

/* ----------------------------------------------------------------
 * Import Dependencies
 * --------------------------------------------------------------*/
const axios = require('express');
const {Photo} = require('../models/photo');

module.exports =
  async function getPhotos(request, response) {
    const searchQuery = request.query.query;

    const url = `https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_PRIVATE_KEY}&query=${searchQuery}`;

    try {
      const res = await axios.get(url);
      const photoArray = res.data.map(photo => new Photo(photo));
      res.send(photoArray);
    } catch (error) {
      console.error('Something bad happened on my end. Sorry!', error);
      response.status(500).send('server error');
    }
  };

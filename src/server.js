'use strict';

const express = require('express');
const cors = require('cors');
const {response} = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get('/health-check', (req, res) => {
  console.log(Date.now());
  res.send('healthy');
});

app.get('/photo', getPhotos);


async function getPhotos(req, res) {
  const searchQuery = req.query.query;

  const url = `https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_PRIVATE_KEY}&query=${searchQuery}`;

  try {
    const response = await axios.get(url);
    const photoArray = response.data.map(photo => new Photo(photo));
    res.send(photoArray);
  } catch (error) {
    console.error('Something bad happened on my end. Sorry!', error);
    response.status(500).send('server error');
  }

}

class Photo {
  constructor(obj) {
    this.img_url = obj.urls.regular;
    this.original_image = obj.links.self;
    this.photographer = obj.user.name;
  }
}

app.get('*', notFound);

function notFound(request, response) {
  response.status(404).send('I can\'t find it.');
}

app.listen(PORT, () => console.log(`... on port ${PORT}`));

/*
 * Joe Ivans, student, Code Fellows Seattle
 */

'use strict';

/* ----------------------------------------------------------------
 * Port Config
 * --------------------------------------------------------------*/
require('dotenv').config();
const PORT = process.env.PORT || -1;

/* ----------------------------------------------------------------
 * Init Express Server
 * --------------------------------------------------------------*/
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
  origin: [
    'http://localhost',
    '.netlify.com',
    '.heroku.com']
}));
app.disable('x-powered-by');

/* ----------------------------------------------------------------
 * Route Controller Imports
 * --------------------------------------------------------------*/
const healthCheckController = require('./controllers/healthCheck');
const photosController = require('./controllers/photosController');
const error400Controller = require('./controllers/Erorr400Controller');

/* ----------------------------------------------------------------
 * Routes
 * --------------------------------------------------------------*/
app.get('/health-check', healthCheckController);
app.get('/photo', photosController);
app.get('*', error400Controller);

/* ----------------------------------------------------------------
 * Main
 * --------------------------------------------------------------*/
app.listen(PORT, () => console.log(`... on port ${PORT}`));

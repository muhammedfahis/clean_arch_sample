const express = require('express');
const routes = express.Router();


routes.use('/user',require('./user/router'));

module.exports = routes

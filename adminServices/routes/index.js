const express = require('express');

const routes = express.Router();


routes.use('/admin',require('./admin/router'));

module.exports = routes
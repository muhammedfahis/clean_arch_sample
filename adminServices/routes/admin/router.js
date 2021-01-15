const makeController = require('../../../libs/fileController/useController');
const {addPostController} = require('../../../libs/admin/app/index');

const express = require('express');
const router = express.Router();

router.post('/add_post',makeController(addPostController));


module.exports =router
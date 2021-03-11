const express = require('express');

const router = express.Router();

const apiController = require('../controllers/api');

router.post('/create-user', apiController.postCreateUser);

module.exports = router;
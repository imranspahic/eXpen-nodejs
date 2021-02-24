const express = require('express');

const path = require('path');

const route = express.Router();

route.get('/', (req, res, next) => {
    console.log("Get requested");
 res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = route;
const path = require('path');

const express = require('express');
const app = express();

const loginRoute = require('./routes/login');

app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoute);

app.listen(4000);
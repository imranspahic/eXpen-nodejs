const path = require('path');

const express = require('express');
const app = express();

const loginRoute = require('./routes/login');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoute);

app.listen(4000);
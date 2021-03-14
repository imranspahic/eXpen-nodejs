const path = require('path');

const express = require('express');

const sequelize = require('./utils/database');

const User = require('./models/user');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

const loginRoutes = require('./routes/login');
const apiRoutes = require('./routes/api');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRoutes);

app.use(apiRoutes);

sequelize.sync().then(
    result => {
        app.listen(4000);
    }
).catch(err => console.log(err));

const Sequelize = require('sequelize');

const sequelize = new Sequelize('expen', 'root', 'node123', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
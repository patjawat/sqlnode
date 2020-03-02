const Sequelize = require('sequelize');

var connection = new Sequelize('sqlnode', 'sa', 'sa', {
    dialect: 'mariadb'
  })
module.exports = connection;

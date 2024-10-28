const sequelize = require('../../config/database');
const User = require('./user')(sequelize, require('sequelize').DataTypes);

module.exports = { sequelize, User };


const { DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection.js`);

const DevelopmentsSources = sequelize.define(`DevelopmentsSources`, {});

module.exports = DevelopmentsSources;
const { DataTypes } = require(`sequelize`);
const sequelize = require(`../config/database`);

const DevelopmentsSources = sequelize.define(`DevelopmentsSources`, {});

module.exports = DevelopmentsSources;
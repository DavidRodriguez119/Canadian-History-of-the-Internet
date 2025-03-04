const { DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection.js`);

const Development = sequelize.define(`Development`, {
    //Model attributes:
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

module.exports = Development;
const { DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection.js`);

const Source = sequelize.define(`Source`, {
    //Model attributes:
    author: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = Source;
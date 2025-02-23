const { DataTypes } = require(`sequelize`);
const sequelize = require(`../config/database`);

const Source = sequelize.define(`Source`, {
    //Model attributes:
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Source;
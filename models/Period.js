const { DataTypes } = require(`sequelize`);
const sequelize = require(`../config/database`);

const Period = sequelize.define(`Period`, {
    //Model attributes:
    startYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    endYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },   
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    overview: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

module.exports = Period;
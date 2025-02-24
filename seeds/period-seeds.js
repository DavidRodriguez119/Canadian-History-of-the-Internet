//Import model
const { Period } = require('../models');

//Import data
const periods = require('../data/periods.json');

//function to seed the database
const seedPeriods = () => Period.bulkCreate(periods);

module.exports = seedPeriods;
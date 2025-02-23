//Import model and data
const { Period } = require('../models');
const periods = require('./periods.json');

//function to seed the database
const seedPeriods = () => Period.bulkCreate(periods);

module.exports = seedPeriods;
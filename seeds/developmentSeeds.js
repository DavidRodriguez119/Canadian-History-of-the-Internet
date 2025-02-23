//Import model and data
const { Development } = require('../models');
const developments = require('./developments.json');

//function to seed the database
const seedDevelopments = () => Development.bulkCreate(developments);

module.exports = seedDevelopments;

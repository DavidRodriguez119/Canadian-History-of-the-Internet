//Import model and data
const { DevelopmentsSources } = require('../models');
const developmentsSources = require('./developmentsSources.json');

//function to seed the database
const seedDevelopmentsSources = () => DevelopmentsSources.bulkCreate(developmentsSources);

module.exports = seedDevelopmentsSources;
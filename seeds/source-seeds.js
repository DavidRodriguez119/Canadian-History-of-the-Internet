//Import model and data
const { Source } = require(`../models`);
const sources = require('../data/sources.json');

//function to seed the database
const seedSources = () => Source.bulkCreate(sources);

module.exports = seedSources;
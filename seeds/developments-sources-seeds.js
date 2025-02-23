//Import model and data
const { DevelopmentsSources, Development, Source } = require('../models');
const developmentsSources = require('../data/developmentsSources.json');

//function to seed the database
const seedDevelopmentsSources = async () => {
    for (const item of developmentsSources) {
        await DevelopmentsSources.create({
            SourceId: item.sourceId,
            DevelopmentId: item.developmentId
        }); 
    }
};

module.exports = seedDevelopmentsSources;
//Require sequelize through the connection file
const sequelize = require(`../config/connection`);

//Require the different seed files
const seedPeriods = require('./seeds/periodSeeds');
const seedDevelopments = require('./seeds/developmentSeeds');
const seedSources = require('./seeds/sourceSeeds');

//Seed the database
const seedDatabase = async () => {
    await sequelize.sync({ force: true }); //Remember to change this to false before deploying
    console.log(`--------------DATABASE SYNCED--------------`);
    await seedPeriods();
    console.log(`--------------PERIODS SEEDED--------------`);
    await seedDevelopments();
    console.log(`--------------DEVELOPMENTS SEEDED--------------`);
    await seedSources();
    console.log(`--------------SOURCES SEEDED--------------`);

    process.exit(0); //Exit the process
};

seedDatabase();
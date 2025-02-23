//Require sequelize through the connection file
const sequelize = require(`../config/connection.js`);

//Require the different seed files
const seedPeriods = require(`./period-seeds.js`);
const seedDevelopments = require('./development-seeds.js');
const seedSources = require('./source-seeds.js');
const seedDevelopmentsSources = require('./developments-sources-seeds.js');

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
    await seedDevelopmentsSources();
    console.log(`--------------DEVELOPMENTS SOURCES SEEDED--------------`);

    console.log(`Seeding completed :)`);
    process.exit(0); //Exit the process
};

seedDatabase();
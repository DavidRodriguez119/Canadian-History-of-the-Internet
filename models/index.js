const Period = require(`./Period`);
const Development = require(`./Development`);
const Source = require(`./Source`);
const DevelopmentsSources = require(`./DevelopmentsSources`);

Period.hasMany(Development, {
    foreignKey: `periodId`,
    onDelete: `CASCADE`, //If a period is deleted, delete all associated developments.
});
Development.belongsTo(Period, {
    foreignKey: `periodId`,
});

Development.belongsToMany(Source, {through: DevelopmentsSources}); //A development can have many sources. 
Source.belongsToMany(Development, {through: DevelopmentsSources}); //A source could be used for many developments.

Period.hasMany(Source, {
    foreignKey: `periodId`,
    onDelete: `SET NULL`,
});
Source.belongsTo(Period, {
    foreignKey: `periodId`,
});

module.exports = {
    Period,
    Development,
    Source,
    DevelopmentsSources,
};
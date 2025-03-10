const express = require('express');
//use the word router instead of express.Router()
const router = express.Router();
//Import models
const { Period, Development, Source, DevelopmentsSources } = require(`../models`);

//route to home page
router.get(`/`, async (req, res) => {
    try{
        //get period data
        const periods = await Period.findAll();
        //render home page
        res.render(`home`, {periods});
        console.log(`Home page rendered ;)`);
    } catch(err){
        console.log(`Something went wrong rendering Home Page :(`, err);
        res.status(500).json({msg: `Something went wrong`, err});
    };    
});

//route to single period page
router.get(`/period-page/:id`, async (req, res) => {
    try{
        //get period data
        const period = await Period.findByPk(req.params.id, {
            include: [Development, Source]
        });
        //render single period page
        res.render(`period-page`, {period});
        console.log(`Single period page rendered ;)`);
    } catch(err){
        console.log(`Something went wrong rendering Single Period Page :(`, err);
        res.status(500).json({msg: `Something went wrong`, err});
    };
});

//route to sources page
router.get(`/sources-page`, async (req, res) => {
    try{
        //get period data
        const period = await Period.findAll({
            include: [Development]
        });

        //get sources data
        const sourcesP1 = await Source.findAll({
            where: {
                periodId: 1
            },
        });

        const sourcesP2 = await Source.findAll({
            where: {
                periodId: 2
            },
        });

        const sourcesP3 = await Source.findAll({
            where: {
                periodId: 3
            },
        });

        const sourcesP4 = await Source.findAll({
            where: {
                periodId: 4
            },
        });
        //render sources page
        res.render(`sources-page`, {sourcesP1, sourcesP2, sourcesP3, sourcesP4, period});
        console.log(`Sources page rendered ;)`);
    } catch(err){
        console.log(`Something went wrong rendering Sources Page :(`, err);
        res.status(500).json({msg: `Something went wrong`, err});
    };
});

//period routes
const periodRoutes = require(`./periodRoutes`);
router.use(`/periods`, periodRoutes);

//development routes
const developmentRoutes = require(`./developmentRoutes`);   
router.use(`/developments`, developmentRoutes);

//source routes
const sourceRoutes = require(`./sourceRoutes`);
router.use(`/sources`, sourceRoutes);

module.exports = router;
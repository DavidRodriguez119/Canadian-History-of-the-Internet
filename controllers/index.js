const express = require('express');
//use the word router instead of express.Router()
const router = express.Router();
//Import models
const { Period, Development, Source } = require(`../models`);

//route to home page
router.get(`/`, async (req, res) => {
    try{
        //get period data
        const periods = await Period.findAll;
        //render home page
        res.render(`home`, {periods});
        console.log(`Home page rendered ;)`);
    } catch(err){
        console.log(`Something went wrong rendering Home Page :(`, err);
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
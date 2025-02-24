const express = require('express');
//use the word router instead of express.Router()
const router = express.Router();

//route to home page
router.get(`/`, async (req, res) => {
    res.render(`home`);
})

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
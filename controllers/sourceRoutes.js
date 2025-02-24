const express = require("express");
const router = express.Router();
//Import models
const { Period, Development, Source } = require(`../models`);

//Find all sources
router.get(`/`, (req, res) => {
    Source.findAll({
        include: [Period]
    }).then((sources) => {
        res.json(sources);
    })
    .catch((err) => {
        res.status(500).json({msg: `Something went wrong`, err});
    });
});

module.exports = router;
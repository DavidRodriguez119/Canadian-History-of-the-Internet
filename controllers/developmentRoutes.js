const express = require("express");
const router = express.Router();
//Import models
const { Period, Development, Source } = require(`../models`);

//Find all developments
router.get(`/`, (req, res) => {
    Development.findAll({
        include: [Source]
    }).then((developments) => {
        res.json(developments);
    })
    .catch((err) => {
        res.status(500).json({msg: `Something went wrong`, err});
    });
});

module.exports = router;
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

//Find one development by id
router.get(`/:id`, (req, res) => {
    Development.findByPk(req.params.id, {
        include: [Source]
    }).then((development) => {
        res.json(development);
    })
    .catch((err) => {
        res.status(500).json({msg: `Something went wrong`, err});
    });
})

//Retrieve all sources for a specific development
router.get(`/:id/sources`, (req, res) => {
    Development.findByPk(req.params.id, {
        include: [Source]
    }).then((development) => {
        res.json(development.Sources);
    })
    .catch((err) => {
        res.status(500).json({msg: `Something went wrong`, err});
    });
});

module.exports = router;
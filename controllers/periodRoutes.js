const express = require("express");
const router = express.Router();
//Import models
const { Period, Development, Source } = require(`../models`);

//Find all periods
router.get(`/`, (req, res) => {
    Period.findAll({
        include: [Development, Source]
    }).then((periods) => {
        res.json(periods);
    })
    .catch((err) => {
        res.status(500).json({msg: `Something went wrong`, err});
    });
});

//Find one period by id
router.get(`/:id`, (req, res) => {
    Period.findByPk(req.params.id, {
        include: [Development, Source]
    }).then((period) => {
        res.json(period);
    })
    .catch((err) => {
        res.status(500).json({msg: `Something went wrong`, err});
    });
});

//Retrieve all developments for a specific period
router.get(`/:id/developments`, (req, res) => {
    Period.findByPk(req.params.id, {
        include: [Development]
    }).then((period) => {
        res.json(period.Developments);
    })
    .catch((err) => {
        res.status(500).json({msg: `Something went wrong`, err});
    });
});

module.exports = router;
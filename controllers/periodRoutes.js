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



module.exports = router;
const express = require('express');
//use the word router instead of express.Router()
const router = express.Router();

//route to home page
router.get(`/`, async (req, res) => {
    res.render(`home`);
})

module.exports = router;
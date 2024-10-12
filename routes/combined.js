// routes/combined.js
const express = require('express');
const router = express.Router();
const combinedController = require('../controllers/combinedController');

router.get('/combined', combinedController.getCombinedData);

module.exports = router;

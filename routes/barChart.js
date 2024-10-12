// routes/barChart.js
const express = require('express');
const router = express.Router();
const barChartController = require('../controllers/barChartController');

router.get('/bar-chart', barChartController.getBarChartData);

module.exports = router;

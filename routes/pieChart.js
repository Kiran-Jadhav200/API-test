// routes/pieChart.js
const express = require('express');
const router = express.Router();
const pieChartController = require('../controllers/pieChartController');

router.get('/pie-chart', pieChartController.getPieChartData);

module.exports = router;

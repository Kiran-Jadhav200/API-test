// controllers/combinedController.js
const statisticsController = require('./statisticsController');
const barChartController = require('./barChartController');
const pieChartController = require('./pieChartController');

exports.getCombinedData = async (req, res) => {
  try {
    const statistics = await statisticsController.getStatistics(req, res);
    const barChart = await barChartController.getBarChartData(req, res);
    const pieChart = await pieChartController.getPieChartData(req, res);

    res.status(200).json({
      statistics,
      barChart,
      pieChart
    });
  } catch (error) {
    res.status(500).send('Error fetching combined data');
  }
};

// controllers/pieChartController.js
const Transaction = require('../models/Transaction');

exports.getPieChartData = async (req, res) => {
  const { month } = req.query;
  const query = {
    dateOfSale: {
      $gte: new Date(`2023-${month}-01`),
      $lt: new Date(`2023-${parseInt(month) + 1}-01`)
    }
  };

  try {
    const pieChartData = await Transaction.aggregate([
      { $match: query },
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);

    res.status(200).json(pieChartData);
  } catch (error) {
    res.status(500).send('Error fetching pie chart data');
  }
};

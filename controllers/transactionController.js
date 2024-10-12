// controllers/transactionController.js
const Transaction = require('../models/Transaction');

exports.listTransactions = async (req, res) => {
  const { search, page = 1, perPage = 10, month } = req.query;
  const query = {};

  if (search) {
    query.$or = [
      { title: new RegExp(search, 'i') },
      { description: new RegExp(search, 'i') },
      { price: parseFloat(search) || 0 }
    ];
  }

  if (month) {
    query.dateOfSale = {
      $gte: new Date(`2023-${month}-01`),
      $lt: new Date(`2023-${parseInt(month) + 1}-01`)
    };
  }

  try {
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).send('Error fetching transactions');
  }
};

// routes/seed.js
const express = require('express');
const router = express.Router();
const seedController = require('../controllers/seedController');

router.get('/seed', seedController.seedDatabase);

module.exports = router;

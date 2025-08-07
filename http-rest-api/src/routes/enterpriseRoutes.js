const express = require('express');
const router = express.Router();
const enterpriseController = require('../controllers/enterpriseController');

router.get('/enterprises', enterpriseController.getEnterprises);

module.exports = router;
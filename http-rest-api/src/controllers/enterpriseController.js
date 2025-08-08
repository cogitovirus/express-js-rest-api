const enterpriseModel = require('../models/enterpriseModel');

async function getEnterprises(req, res) {
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = parseInt(req.query.offset, 10) || 0;


  try {
    const data = await enterpriseModel.getAllEnterprises(limit, offset);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getEnterprises };
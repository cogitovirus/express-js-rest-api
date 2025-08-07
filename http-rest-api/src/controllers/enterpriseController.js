const enterpriseModel = require('../models/enterpriseModel');

async function getEnterprises(req, res) {
  try {
    const data = await enterpriseModel.getAllEnterprises();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getEnterprises };
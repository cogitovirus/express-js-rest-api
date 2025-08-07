const pool = require('./db');

async function getAllEnterprises() {
  const res = await pool.query('SELECT * FROM enterprise_genai_adoption_impact LIMIT 5');
  return res.rows;
}

module.exports = { getAllEnterprises };
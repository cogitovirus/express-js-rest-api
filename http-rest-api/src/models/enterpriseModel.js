const pool = require('./db');

async function getAllEnterprises(limit, offset) {
  const dataRes = await pool.query(
    'SELECT * FROM enterprise_genai_adoption_impact LIMIT $1 OFFSET $2',
    [limit, offset]
  );
  const countRes = await pool.query(
    'SELECT COUNT(*) FROM enterprise_genai_adoption_impact'
  );
  return {
    data: dataRes.rows,
    limit,
    offset,
    total: parseInt(countRes.rows[0].count, 10)
  };
}

module.exports = { getAllEnterprises };
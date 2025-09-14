import pool from '../models/db.js';
import type { Enterprise } from '../models/enterpriseModel.js';

export async function findAllEnterprises(limit: number, offset: number): Promise<{ data: Enterprise[]; limit: number; offset: number; total: number }> {
  const dataRes = await pool.query('SELECT * FROM enterprise_genai_adoption_impact LIMIT $1 OFFSET $2', [limit, offset]);
  const countRes = await pool.query('SELECT COUNT(*) FROM enterprise_genai_adoption_impact');
  return {
    data: dataRes.rows as Enterprise[],
    limit,
    offset,
    total: parseInt(countRes.rows[0].count, 10)
  };
}

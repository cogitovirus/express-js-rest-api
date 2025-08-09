import pool from './db.js';

export interface Enterprise {
  id: number;
  CompanyName: string;
  Industry: string;
  Country: string;
  GenAITool: string;
  AdoptionYear: number;
  NumberOfEmployeesImpacted: number;
  NewRolesCreated: number;
  TrainingHoursProvided: number;
  ProductivityChange: number;
  EmployeeSentiment: string;
}

export async function getAllEnterprises(limit: number, offset: number): Promise<{ data: Enterprise[]; limit: number; offset: number; total: number }> {
  const dataRes = await pool.query('SELECT * FROM enterprise_genai_adoption_impact LIMIT $1 OFFSET $2', [limit, offset]);
  const countRes = await pool.query('SELECT COUNT(*) FROM enterprise_genai_adoption_impact');
  return {
    data: dataRes.rows as Enterprise[],
    limit,
    offset,
    total: parseInt(countRes.rows[0].count, 10)
  };
}

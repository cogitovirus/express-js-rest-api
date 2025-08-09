import type { Request, Response } from 'express';
import { getAllEnterprises } from '../models/enterpriseModel.js';

export async function getEnterprises(req: Request, res: Response): Promise<void> {
  const limit = parseInt(req.query.limit as string, 10) || 10;
  const offset = parseInt(req.query.offset as string, 10) || 0;
  try {
    const result = await getAllEnterprises(limit, offset);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

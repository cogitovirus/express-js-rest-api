import type { Request, Response } from 'express';
import { getEnterprisesService, getEnterpriseByIdService } from '../services/enterpriseService.js';

export async function getEnterprises(req: Request, res: Response): Promise<void> {
  const limit = parseInt(req.query.limit as string, 10) || 10;
  const offset = parseInt(req.query.offset as string, 10) || 0;
  try {
    const result = await getEnterprisesService(limit, offset);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getEnterpriseById(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id, 10);
  try {
    const enterprise = await getEnterpriseByIdService(id);
    if (!enterprise) {
      res.status(404).json({ error: 'Enterprise not found' });
      return;
    }
    res.json(enterprise);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

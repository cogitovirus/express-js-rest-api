import { Router } from 'express';
import { getEnterprises } from '../controllers/enterpriseController.js';

const router = Router();

router.get('/enterprises', getEnterprises);

export default router;

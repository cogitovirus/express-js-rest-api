import { Router } from 'express';
import { getEnterprises } from '../controllers/enterpriseController.js';


const router = Router();

router.get('/v1/enterprises', getEnterprises);

export default router;

import { Router } from 'express';

const router = Router();

/**
 * @openapi
 * /api/v1/healthcheck:
 *   get:
 *     summary: Healthcheck endpoint
 *     description: Returns server status, uptime, and timestamp.
 *     responses:
 *       200:
 *         description: Healthcheck response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 uptime:
 *                   type: number
 *                 timestamp:
 *                   type: string
 */
router.get('/healthcheck', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;

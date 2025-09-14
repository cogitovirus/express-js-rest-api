import { Router } from 'express';
import { getEnterprises, getEnterpriseById } from '../controllers/enterpriseController.js';


const router = Router();


/**
 * @openapi
 * /api/v1/enterprises:
 *   get:
 *     summary: Get all enterprises
 *     description: Returns a list of enterprises from the database.
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Maximum number of enterprises to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of enterprises to skip
 *     responses:
 *       200:
 *         description: A JSON array of enterprise objects
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 limit:
 *                   type: integer
 *                 offset:
 *                   type: integer
 *                 total:
 *                   type: integer
 */
router.get('/enterprises', getEnterprises);

/**
 * @openapi
 * /api/v1/enterprises/{id}:
 *   get:
 *     summary: Get enterprise by ID
 *     description: Returns a single enterprise by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The enterprise ID
 *     responses:
 *       200:
 *         description: Enterprise found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 CompanyName:
 *                   type: string
 *                 Industry:
 *                   type: string
 *                 Country:
 *                   type: string
 *                 GenAITool:
 *                   type: string
 *                 AdoptionYear:
 *                   type: integer
 *                 NumberOfEmployeesImpacted:
 *                   type: integer
 *                 NewRolesCreated:
 *                   type: integer
 *                 TrainingHoursProvided:
 *                   type: integer
 *                 ProductivityChange:
 *                   type: number
 *                 EmployeeSentiment:
 *                   type: string
 *       404:
 *         description: Enterprise not found
 */
router.get('/enterprises/:id', getEnterpriseById);

export default router;

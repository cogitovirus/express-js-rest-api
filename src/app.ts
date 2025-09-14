import express from 'express';
import enterpriseRoutes from './routes/enterpriseRoutes.js';
import healthcheckRoutes from './routes/healthcheckRoutes.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';


const app = express();
app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1', enterpriseRoutes);
app.use('/api/v1', healthcheckRoutes);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
import express from 'express';
import enterpriseRoutes from './routes/enterpriseRoutes.js';


const app = express();
app.use(express.json());

app.get('/api/v1/healthcheck', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use('/api', enterpriseRoutes);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
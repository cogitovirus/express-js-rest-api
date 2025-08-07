const express = require('express');
const enterpriseRoutes = require('./routes/enterpriseRoutes');

const app = express();
app.use(express.json());
app.use('/api', enterpriseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
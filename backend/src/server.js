const express = require('express');
const cors = require('cors');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', fornecedorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
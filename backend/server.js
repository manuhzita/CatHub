const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cadastroRoutes = require('./cadastroroutes');
const app = express();
const port = 3001; // Defina a porta que deseja utilizar

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/cadastro', cadastroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});






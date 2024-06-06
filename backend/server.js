// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const cadastroRoutes = require('./cadastroroutes');
// const app = express();
// const PORT = 3001; // Defina a porta que deseja utilizar
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/cadastro', cadastroRoutes);

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cadastroroutes = require('./cadastroroutes');
const loginroutes = require('./loginroutes'); 

const app = express();
const port = 3002; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Usa as rotas do backend
app.use('/cadastro', cadastroroutes);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});





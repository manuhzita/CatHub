

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cadastroroutes = require('./cadastroroutes');
const contatoroutes = require('./contatoroutes');



const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// Usa as rotas do backend
app.use('/cadastro', cadastroroutes);
app.use('/contatos', contatoroutes);


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});





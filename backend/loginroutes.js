const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para verificar se email e senha existem
router.post('/cadastro', (req, res) => {
  const { email, senha } = req.body;
  connection.query('SELECT senha FROM cadastro WHERE email = ?',
    [senha, email], (err, result) => {
      if (err) {
        console.log(`senha: ${senha} e resultsenha: ${result}`);
        console.log(result[0].senha);
        if (err) {
          console.error('Erro ao consultar o registro:', err);
          res.status(500).json({ error: 'Erro ao consultar o registro especificado' });
          return;
        }
        if (senha != result[0].senha) {
          console.error('Senha inválida', err);
          res.status(500).json({ error: 'Senha inválida, tente novamente!' });
          return;
        }
        console.log('login efetuado');

        res.status(201).json({ message: result, id: result.insertId });
      }
    });
});


module.exports = router;

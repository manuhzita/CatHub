const express = require('express');
const router = express.Router();
const connection = require('./db');

// Rota para obter todos os contatos
router.get('/contatos', (req, res) => {
    const sql = 'SELECT * FROM contato';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar contatos: ', err);
            res.status(500).send('Erro ao buscar contatos');
            return;
        }
        res.json(results);
    });
});

// Rota para obter um contato pelo ID
router.get('/contatos/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM contato WHERE id = ?';
    connection.query(sql, id, (err, results) => {
        if (err) {
            console.error('Erro ao buscar contato: ', err);
            res.status(500).send('Erro ao buscar contato');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Contato não encontrado');
            return;
        }
        res.json(results[0]);
    });
});

// Rota para adicionar um novo contato
router.post('/contatos', (req, res) => {
    const { email, mensagem } = req.body;
    const sql = 'INSERT INTO contato (email, mensagem) VALUES (?, ?)';
    connection.query(sql, [email, mensagem], (err, result) => {
        if (err) {
            console.error('Erro ao enviar mensagem: ', err);
            res.status(500).send('Erro ao enviar mensagem');
            return;
        }
        res.status(201).send('Mensagem enviada com sucesso');
    });
});

// Rota para atualizar um contato
router.put('/contatos/:id', (req, res) => {
    const id = req.params.id;
    const { email, mensagem } = req.body;
    const sql = 'UPDATE contato SET email = ?, mensagem = ? WHERE id = ?';
    connection.query(sql, [email, mensagem, id], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar mensagem: ', err);
            res.status(500).send('Erro ao atualizar mensagem');
            return;
        }
        res.send('Mensagem atualizada com sucesso');
    });
});

// Rota para excluir um contato
router.delete('/contatos/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM contato WHERE id = ?';
    connection.query(sql, id, (err, result) => {
        if (err) {
            console.error('Erro ao excluir contato: ', err);
            res.status(500).send('Erro ao excluir contato');
            return;
        }
        res.send('Contato excluído com sucesso');
    });
});

module.exports = router;

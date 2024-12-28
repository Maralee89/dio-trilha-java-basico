const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Conexão com o banco de dados

const app = express();
app.use(bodyParser.json());

// POST: Criar um novo professor
app.post('/projeto-escolar/professor', (req, res) => {
  const { nome, email, disciplina, telefone } = req.body;
  const sql = 'INSERT INTO professores (nome, email, disciplina, telefone) VALUES (?, ?, ?, ?)';
  db.query(sql, [nome, email, disciplina, telefone], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao criar professor.');
      return;
    }
    res.status(201).send('Professor criado com sucesso!');
  });
});

// PUT: Atualizar os dados de um professor
app.put('/projeto-escolar/professor/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, disciplina, telefone } = req.body;
  const sql = 'UPDATE professores SET nome = ?, email = ?, disciplina = ?, telefone = ? WHERE id = ?';
  db.query(sql, [nome, email, disciplina, telefone, id], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao atualizar professor.');
      return;
    }
    res.status(200).send('Professor atualizado com sucesso!');
  });
});

// DELETE: Excluir um professor
app.delete('/projeto-escolar/professor/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM professores WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao excluir professor.');
      return;
    }
    res.status(200).send('Professor excluído com sucesso!');
  });
});

// GET: Listar todos os professores
app.get('/projeto-escolar/professor', (req, res) => {
  const sql = 'SELECT * FROM professores';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar professores.');
      return;
    }
    res.status(200).json(results);
  });
});

// GET: Buscar um professor pelo ID
app.get('/projeto-escolar/professor/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM professores WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar professor.');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Professor não encontrado.');
      return;
    }
    res.status(200).json(results[0]);
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

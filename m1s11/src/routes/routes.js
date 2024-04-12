const { Router } = require("express");
const Aluno = require("../models/Aluno");
const Curso = require("../models/Curso");

const routes = new Router();

routes.get("/bem_vindo", (req, res) => {
  res.json({'nome': 'Bem vindo'})
});

//Alunos
routes.post('/alunos', async (req, res) => {

  const nome = req.body.nome
  const data_nascimento = req.body.data_nascimento
  const celular = req.body.celular

  const aluno = await Aluno.create({
      nome: nome,
      data_nascimento: data_nascimento,
      celular: celular
  })  
 res.json({aluno})
})

routes.get('/alunos', async (req, res) => {
  const alunos = await Aluno.findAll()
  res.json(alunos)
})

//Cursos
routes.post('/cursos', async (req, res) => {

  const nome = req.body.nome
  const duracao_horas = req.body.duracao_horas

  const curso = await Curso.create({
      nome: nome,
      duracao_horas: duracao_horas,
  })  
 res.json({curso})
})

routes.get('/cursos', async (req, res) => {
  const curso = await Curso.findAll()
  res.json(curso)
})

routes.put('/cursos/:id', async (req, res) => {
  const { nome, duracao_horas } = req.body;

  const curso = await Curso.update({ nome, duracao_horas }, { where: { id: req.params.id } });

  res.json({ mensagem: 'Curso atualizado com sucesso', curso });
});

module.exports = routes
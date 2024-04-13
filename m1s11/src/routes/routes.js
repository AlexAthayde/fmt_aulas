const { Router } = require("express")
const Aluno = require("../models/Aluno")
const Curso = require("../models/Curso")

const routes = new Router()

routes.get("/bem_vindo", (req, res) => {
  res.json({'nome': 'Bem vindo'})
});

//Alunos
routes.post('/alunos', async (req, res) => {
  try {
    const nome = req.body.nome
    const data_nascimento = req.body.data_nascimento
    const celular = req.body.celular

    if (!nome) {
      return res.status(400).json({messagem: 'O nome é obrigatório!'})      
    }
    if (!data_nascimento) {
      return res.status(400).json({messagem: 'A data de nascimento é obrigatório!'})      
    }

    if(!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
      return res.status(400).json({ messagem: 'A data de nascimento não está no formato correto. (ex. AAAA-MM-DD)' }) 
    }

    if (!celular) {
      return res.status(400).json({messagem: 'O celular é obrigatório!'})      
    }
    
    const aluno = await Aluno.create({
        nome: nome,
        data_nascimento: data_nascimento,
        celular: celular
    })  
    res.status(201).json({aluno}) 
  } catch (error) {
    console.log(error.mensagem)
    res.status(500).json({error: 'Não foi possível cadastrar o aluno, tente novamente!'})
  }

})

routes.get('/alunos', async (req, res) => {
  const alunos = await Aluno.findAll()
  res.status(200).json(alunos)
})

//Cursos
routes.post('/cursos', async (req, res) => {
  try {
    const nome = req.body.nome
    const duracao_horas = req.body.duracao_horas

    if (!nome) {
      return res.status(400).json({messagem: 'O nome é obrigatório!'})      
    }
    if (!(duracao_horas >= 40 && duracao_horas <= 200)) {
      return res.status(400).json({messagem: 'A duração do curso deve ser entre 40 e 200 horas!'})      
    }
  
    const curso = await Curso.create({
        nome: nome,
        duracao_horas: duracao_horas,
    }) 

   res.status(201).json({curso})
  } catch (error) {
    console.log(error.mensagem)
    res.status(500).json({error: 'Não foi possível cadastrar o curso, tente novamente!'})
  }
})

routes.get('/cursos', async (req, res) => {
  const curso = await Curso.findAll()
  res.status(200).json(curso)
})

routes.delete('/cursos/:id', (req,res) => {
  const id = req.params.id
  
  if (!id) {
    
  }

  Curso.destroy({
    where:{
      id:id
    }
  })

  res.status(204).json({})
})

module.exports = routes
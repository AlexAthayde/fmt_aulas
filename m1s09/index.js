//npm init -y

//npm install express

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/sobre", function (req, res) {
  res.send("Essa é minha primeira aplicação de servidor!");
});

app.get("/ola/:nome/:idade", function (req, res) {
  let nome = req.params.nome;
  res.send(`Olá ${nome}, tudo bem?`);
});

app.get("/busca", (req, res) => {
  // let parametro = req.query.parametro

  const { nome, idade, cpf } = req.query;

  // Verificar se o parâmetro "parametro" está presente!
  if (!nome) {
    return res.status(400).json({
      error: "Nome não foi informado!",
    });
  }

  if (!cpf) {
    return res.status(400).json({
      error: "CPF não foi informado!",
    });
  }

  res.json({
    message: `Você pesquisou por: nome: ${nome} idade: ${idade} cpf: ${cpf}`,
  });
});

let pessoas = [];

app.post("/pessoas", (req, res) => {
    const { nome, idade, ativo } = req.body

    let novaPessoa = {nome, idade, ativo}

    pessoas.push(novaPessoa)

    res.status(201).send(`Pessoa adicionada com sucesso: ${JSON.stringify(novaPessoa)}` );

})

app.listen(3000, function () {
  console.log("Servidor Rodando!!!");
});

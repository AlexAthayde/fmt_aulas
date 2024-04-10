const { Router } = require("express");

const routes = new Router();

routes.get("/bem_vindo", (req, res) => {
  res.json({'nome': 'Bem vindo'})
});


module.exports = routes
const { Router } = require('express')
const LoginControllers = require('../controllers/LoginController')

const loginRoutes = new Router()

loginRoutes.get('/bem_vindo', (req, res) => {
    res.json({ name: 'Bem vindo' })
})

loginRoutes.post('/', LoginControllers.login )




module.exports = loginRoutes

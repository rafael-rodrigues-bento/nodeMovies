const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', usersController.update)

module.exports = usersRoutes

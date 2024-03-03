const express = require('express');
const { userController } = require('../controllers/inndex');
const route = express.Router();

route.get('/Home',userController.getHome);

route.post('/addToDo',userController.addTodo)

route.get('/update/:id',userController.redirectToUpdate)

route.post('/update',userController.updateTodo)

route.get('/delete/:id',userController.removeTodo)

module.exports = route;
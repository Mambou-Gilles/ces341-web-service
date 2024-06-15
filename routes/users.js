const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.get('/:id', userController.getSingle);

userRouter.get('/', userController.getAll);

module.exports = userRouter;
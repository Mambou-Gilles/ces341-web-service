const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.get('/:id', userController.getSingle);

userRouter.get('/', userController.getAll);

userRouter.post('/create', userController.createUser);
userRouter.put('/update/:id', userController.updateUser);
userRouter.delete('/delete/:id', userController.deleteUser);


module.exports = userRouter;
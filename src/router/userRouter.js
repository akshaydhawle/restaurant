const express = require('express');

const { userController } = require('../controller/userController');

const userRouter = express.Router();
const { authentication } = require('../middleware/authentication');
const { authorization } = require('../middleware/authorization');

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/forgot-password', userController.forgotPassword);

userRouter.put('/update', [authentication], userController.updateProfile);
userRouter.post('/product', [authentication, authorization(['SELLER'])], userController.addProduct);
userRouter.get('/product', [authentication, authorization(['USER', 'SELLER', 'ADMIN'])], userController.getProducts);
userRouter.get('/', [authentication, authorization(['ADMIN'])], userController.getUsers);

module.exports = userRouter;


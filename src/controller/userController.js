const UtilService = require('../services/utils');
const MailerService = require('../services/mailer');
const userService = require('../services/userService');
const userValidation = require('../validation/userValidation');
const { MESSAGES, HTTP_CODES } = require('../constants/constants');

const userController = {
    register,
    login,
    updateProfile,
    forgotPassword,
    resetPassword,
    deActivateProfile,
    getProducts,
    getUsers,
    addProduct
};

async function register(req, res) {
    try {
        let logger = `registerController:`
        const { email, password } = req.body;
        
        // validate the user
        userValidation.validateRegister(req.body);
        console.log(`${logger} - user validated`);

        // check if user with email id already registered
        await userService.checkIfUserAlreadyExists({ email });
        console.log(`${logger} - new user , we've verified`, email);

        // encrypt password 
        const hash = UtilService.hash(password);
        console.log(`${logger} - password encrypted`);

        // update the password hash
        req.body.password = hash;

        // save the user in the database
        const userData = await userService.saveUser(req.body);
        console.log(`${logger} - user saved in database`);

        // send json web token 
        const token = UtilService.generateWebToken({ email, name: userData.name, _id: userData._id });
        console.log(`${logger} - webtoken generated`);

        console.log(`${logger} - user registered.`);
        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.REGISTER_SUCCESS,
            token
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function login(req, res) {
    try {
        // extraction
        const { email, password } = req.body;

        // validation
        userValidation.validateLogin(req.body);

        // check if user valid or not
        await userService.isUserValid({ email });

        // check password
        const isValidPassword = UtilService.checkPassword(password, user.password);
        if (!isValidPassword) throw UtilService.CustomError({
            message: MESSAGES.INVALID_CREDENTIALS,
            statusCode: HTTP_CODES.UNAUTHORIZED
        });

        // generate web token
        const token = UtilService.generateWebToken({ email, _id: user._id });

        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.LOGIN_SUCCESS,
            token
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function forgotPassword(req, res) {
    try {
        const { email } = req.query;

        // check if user valid or not
        await userService.isUserValid({ email });

        let url = 'http://localhost:3000/users/reset-password'
        MailerService.sendEmail(email, url);

        return res.status(200).send({
            message: 'Mail Sent To Your Email , Please Check Your Inbox'
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function resetPassword(req, res) {
    try {
        const { email, password } = req.body;

        // validation
        userValidation.validateResetPassword(req.body);

        // check if user valid or not
        let user = await userService.isUserValid({ email });

        user.password = UtilService.hash(password);

        await userService.saveUser(user);

        return res.send({
            message: MESSAGES.PASSWORD_RESET_SUCCESS
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function updateProfile(req, res) {
    try {
        const { _id } = req.body;

        // await usersModel.updateOne({
        //     _id: _id
        // }, req.body);

        return res.send({ user: req.user, message: 'profile updated' });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function deActivateProfile(req, res) {
    try {

        return res.send();
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

// seller
function addProduct(req, res) {
    try {
        res.send('product added successfully.')
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

// public apis 
function getProducts(req, res) {
    try {
        res.send('products fetched successfully.')
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

// admin 
function getUsers(req, res) {
    try {
        res.send('users fetched successfully.')
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}



module.exports = {
    userController
}
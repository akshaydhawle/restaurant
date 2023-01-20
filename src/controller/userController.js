const Joi = require('joi');
const { usersModel } = require('../models/userModel');
const UtilService = require('../services/utils');
const MailerService = require('../services/mailer');

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
        const { email, password } = req.body;

        // validation
        const schema = Joi.object({
            type: Joi.string().required(),
            name: Joi.string().optional(),
            email: Joi.string().required(),
            password: Joi.string().min(5).max(15).required(),
        })
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send({
            message: error.details[0].message,
        })

        // check if user with email id already registered
        const user = await usersModel.findOne({ email });
        if (user) return res.status(409).send({
            message: 'User Already Registered With Given Email Id'
        })

        // encrypt password 
        const hash = UtilService.hash(password);
        console.log("hash", hash);
        // update the password hash
        req.body.password = hash;


        // save the user in the database
        const userData = await usersModel(req.body).save();

        // send json web token 
        const token = UtilService.generateWebToken({ email, name: userData.name, _id: userData._id });

        return res.send({
            message: "User Registered Successfully.",
            token
        });
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

async function login(req, res) {
    try {
        // extraction
        const { email, password } = req.body;

        // validation
        const schema = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send({
            message: error.details[0].message
        })

        // find user
        const user = await usersModel.findOne({ email });
        if (!user) return res.status(404).send({
            message: 'User Not Found'
        });

        const isValidPassword = UtilService.checkPassword(password, user.password);
        if (!isValidPassword) return res.status(401).send({
            message: "Invalid credentials"
        });

        const token = UtilService.generateWebToken({ email, _id: user._id });

        return res.status(200).send({
            message: 'Login Successful',
            token
        });
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

async function forgotPassword(req, res) {
    try {
        const { email } = req.query;

        // find user
        const user = await usersModel.findOne({ email });
        if (!user) return res.status(404).send({
            message: 'User Not Found'
        });

        let url = 'http://localhost:3000/users/reset-password'
        MailerService.sendEmail(email, url);

        return res.status(200).send({
            message: 'Mail Sent To Your Email , Please Check Your Inbox'
        });
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

async function resetPassword(req, res) {
    try {
        const { email, password } = req.body;

        const schema = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required(),
            confirmPassword: Joi.ref('password').required()
        })
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send({
            message: error.details[0].message
        })

        // find user
        const user = await usersModel.findOne({ email });
        if (!user) return res.status(404).send({
            message: 'User Not Found'
        });

        user.password = UtilService.hash(password);

        await user.save();

        return res.send({
            message: 'Password reset successfully'
        });
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

async function updateProfile(req, res) {
    try {
        const { _id } = req.body;

        await usersModel.updateOne({
            _id: _id
        }, req.body);

        return res.send({ user: req.user, message: 'profile updated' });
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

async function deActivateProfile(req, res) {
    try {

        return res.send();
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

// seller
function addProduct(req, res) {
    try {
        res.send('product added successfully.')
    } catch (error) {
        return res.status(500).send('Internal server error')
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
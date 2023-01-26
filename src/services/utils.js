const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

const expiryTime = config.get('SECURITY.JSONWEBTOKEN_EXPIRY');
const secretKey = config.get('SECURITY.JSONWEBTOKEN_SECRET');

function generateWebToken(info) {
    return jwt.sign({
        data: info
    }, secretKey, { expiresIn: expiryTime });
}

function hash(password) {
    const saltRounds = config.get('SECURITY.BCRYPT_SALT_ROUNDS');
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function checkPassword(password, encryptedPassword) {
    return bcrypt.compareSync(password, encryptedPassword);
}

function verify(token) {
    return jwt.verify(token, secretKey);
}

function CustomError({ message = '', statusCode, data }) {
    let err = new Error(message);
    Object.setPrototypeOf(err, CustomError.prototype);
    err.message = message;
    err.statusCode = statusCode;
    err.data = data;
    console.log(err);
    return err;
}

function serverError({ res, error }) {
    console.log(error);

    if (error && error.statusCode)
        return res.status(error.statusCode).send(error.message);
    return res.status(500).send('Internal server error')
}

function formatResponseForPagination({ data, totalCount, page, size }) {
    size = Number(size)
    let totalPages = Math.ceil(totalCount / Number(size));
    return {
        totalItems: totalCount,
        totalPages,
        currentPage: page,
        data,
    }
}

function initializeValues(body) {
    body.sortColumn = body.hasOwnProperty('sortColumn') ? body.sortColumn : '_id';
    body.sortDirection = (body && body.sortDirection) ? body.sortDirection : 'DESC';
    body.filter = (typeof body.filter === 'string') ? JSON.parse(body.filter) : {};
    body.page = (body && body.page) ? Number(body.page) : 1;
    body.size = (body && body.size) ? Number(body.size) : 10;
    return body;
}


module.exports = {
    generateWebToken,
    hash,
    checkPassword,
    verify,
    CustomError,
    serverError,
    formatResponseForPagination,
    initializeValues
}
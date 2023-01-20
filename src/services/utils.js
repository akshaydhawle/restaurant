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
``
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


module.exports = {
    generateWebToken,
    hash,
    checkPassword,
    verify
}
const { verify } = require('../services/utils');

function authentication(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(400).send({ message: 'Auth Token Is Missing' });
        const decoded = verify(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(500).send({ message: "Invalid Token" })
    }
}

module.exports = {
    authentication
}


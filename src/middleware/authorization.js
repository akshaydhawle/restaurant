const { usersModel } = require('../models/userModel');
const { verify } = require('../services/utils');

function authorization(role) {
    return async function (req, res, next) {
        try {
            const { _id } = req.user.data;
            console.log('authorization: payload', req.user);

            let user = await usersModel.findById(_id);
            console.log('authorization: user', user);

            if (!role.includes(user.type)) return res.status(403).send({
                message: "You are not authorize to access the api, please contact your admin."
            });

            next();
        } catch (error) {
            console.log('authorization: error', error);
            return res.status(500).send({ message: "something went wrong." })
        }
    }
}

module.exports = {
    authorization
}


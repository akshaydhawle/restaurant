const userRouter = require('../router/userRouter');


function connectToRouter(app) {
    app.use('/users', userRouter);
}

module.exports = {
    connectToRouter
}
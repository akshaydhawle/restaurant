const userRouter = require('../router/userRouter');
const locationRouter = require('../router/locationRouter');
const categoryRouter = require('../router/categoryRouter');

function connectToRouter(app) {
    app.use('/users', userRouter);
    app.use('/locations', locationRouter);
    app.use('/categories', categoryRouter);
}

module.exports = {
    connectToRouter
}
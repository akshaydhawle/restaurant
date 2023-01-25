const userRouter = require('../router/userRouter');
const locationRouter = require('../router/locationRouter');
const categoryRouter = require('../router/categoryRouter');
const restaurantRouter = require('../router/restaurantRouter');

function connectToRouter(app) {
    app.use('/users', userRouter);
    app.use('/locations', locationRouter);
    app.use('/categories', categoryRouter);
    app.use('/restaurants', restaurantRouter);
}

module.exports = {
    connectToRouter
}
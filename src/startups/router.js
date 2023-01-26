const userRouter = require('../router/userRouter');
const locationRouter = require('../router/locationRouter');
const categoryRouter = require('../router/categoryRouter');
const restaurantRouter = require('../router/restaurantRouter');
const menuRouter = require('../router/menuRouter');
const reviewRouter = require('../router/reviewRouter');
const cartRouter = require('../router/cartRouter');
const checkoutRouter = require('../router/checkoutRouter');

function connectToRouter(app) {
    app.use('/users', userRouter);
    app.use('/locations', locationRouter);
    app.use('/categories', categoryRouter);
    app.use('/restaurants', restaurantRouter);
    app.use('/menus', menuRouter);
    app.use('/reviews', reviewRouter);
    app.use('/carts', cartRouter);
    app.use('/checkout', checkoutRouter);
}

module.exports = {
    connectToRouter
}
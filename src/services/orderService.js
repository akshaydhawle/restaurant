const { menusModel } = require("../models/menusModel");
const { orderItemsModel } = require("../models/orderItemModel");
const { ordersModel } = require("../models/ordersModel");
const { restaurantsModel } = require("../models/restaurantsModel");
const { usersModel } = require("../models/usersModel");


async function processOrderItems(cartItem) {
    let logger = `processOrderItems`;
    console.log(`${logger}`);
    // get restaurant details

    console.log(`${logger}: finding restaurant details`);
    const restaurant = await restaurantsModel.findById(cartItem.restaurantId, '_id name address');

    // get menu details
    console.log(`${logger}: finding menu details`);
    const menu = await menusModel.findById(cartItem.menuId, '_id name description image price');

    console.log(`${logger}: building order item`);
    let orderItem = {
        restaurantId: restaurant._id,
        restaurantDetails: restaurant,
        itemDetails: menu,
        quantity: cartItem.quantity,
        price: (menu.price * cartItem.quantity)
    }

    console.log(`${logger}: order items builded successfully.`);
    return orderItem;
}

async function processOrder({ logName, userId, cartItems }) {
    // initialized variables
    let logger = `${logName} : processOrder`;
    console.log(`${logger}: initialize variables`);
    const orderItems = [];
    let totalAmount = 0;
    let totalPayable = 0;
    let quantity = 0;
    let tax = 0.1; // 10 %
    let order;

    // process order items and maintain counts
    console.log(`${logger}: processing order Items ...`);
    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        const orderItem = await processOrderItems(cartItem);
        totalAmount += orderItem.price;
        quantity += orderItem.quantity;
        orderItems.push(orderItem);
    }

    // calculate total payable
    console.log(`${logger}: calculating total payable ...`);
    totalPayable = totalAmount - (totalAmount * tax);

    // find user deliver address
    console.log(`${logger}: finding delivery address of user ...`);
    const deliverAddress = (await usersModel.findById(userId)).address;

    // build order
    console.log(`${logger}: building order data ...`);
    order = {
        userId,
        totalAmount,
        totalPayable,
        quantity,
        tax,
        deliverAddress
    }

    console.log(`${logger}: processing order and order items done ...`);
    return { order, orderItems };
}

function addOrderIdIntoOrderItems(orderId, orderItems) {
    return orderItems.map(item => {
        return {
            ...item,
            orderId: orderId,
        }
    })
}

async function createOrder({ logName, order, orderItems }) {
    let logger = `${logName} : createOrder: `;
    console.log(`${logger}: input: ${JSON.stringify(orderItems).length}`);

    // create order 
    console.log(`${logger}: processing done, creating order ...`);
    const orderResponse = await ordersModel(order).save();

    // add order id into order items
    console.log(`${logger}: order created, adding orderId into order items ...`);
    const orderItemsDetails = addOrderIdIntoOrderItems(orderResponse.id, orderItems);

    // create order items
    console.log(`${logger}: orderId added into order items , creating order items ...`);
    await orderItemsModel.insertMany(orderItemsDetails);

    console.log(`${logger}: order items created, return response`);
    // create order
    return {
        order: orderResponse,
        orderItems: orderItemsDetails
    }
}

module.exports = {
    createOrder,
    processOrder
}
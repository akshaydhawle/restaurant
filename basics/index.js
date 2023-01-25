
function createInvoice() {
    const logger = `createInvoice: `;
    console.log(`${logger} - processing invoice`);
    createBill();
}

function createBill() {
    let logger = `createBill:`
    console.log(`${logger} processing bill`);
    checkout();
}

function checkout() {
    let logger = `checkout:`
    console.log(`${logger} charging customer`);
    dispatched()
}

function dispatched() {
    let logger = `dispatched:`
    console.log(`${logger} dispatching order`);
    notifyCustomer();
}

function notifyCustomer() {
    let logger = `notifyCustomer:`
    console.log(`${logger} notifying customer`);
}

createInvoice();

function hi() {
    let logger = `hi: `;
    console.log(` ${logger} hello`)
}

function checkout() {
    let logger = `user function :checkout `

    console.log(`${logger} is `);

}


// 


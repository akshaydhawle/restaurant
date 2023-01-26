// const config = require('config');
const { HTTP_CODES } = require('../constants/constants');
const { CustomError } = require('./utils');
// let stripeSecretKey = config.get('PAYMENT_GATEWAY.STRIPE_SECRET_KEY');
const stripeSecretKey = 'sk_test_On1hTxIFxnm5tCe02FaacjTf';
const stripe = require("stripe")(stripeSecretKey);

// for testing payload is here
let sampleCardPayload = {
    card: {
        number: '4242424242424242',
        exp_month: 2,
        exp_year: 2023,
        cvc: '314',
    }
};

let chargeSamplePayload = {
    amount: 2000,
    currency: 'usd',
    source: 'tok_amex',
    description: 'My First Test Charge'
}

async function createToken(cardData) {
    let logger = `createToken`;
    console.log(logger);

    console.log(`${logger} : generating token`, JSON.stringify(cardData));
    const token = await stripe.tokens.create({
        card: {
            number: cardData.number,
            exp_month: cardData.exp_month,
            exp_year: cardData.exp_year,
            cvc: cardData.cvv
        }
    });
    if (!token.id) {
        throw CustomError({ message: 'Payment failed.', statusCode: HTTP_CODES.INTERNAL_SERVER_ERROR, data: token })
    }
    console.log(`${logger} : token generated`, token.id);

    return token;
}

let fees = {
    USD: { Percent: 2.9, Fixed: 0.3 },
    GBP: { Percent: 2.4, Fixed: 0.2 },
    EUR: { Percent: 2.4, Fixed: 0.24 },
    CAD: { Percent: 2.9, Fixed: 0.3 },
    AUD: { Percent: 2.9, Fixed: 0.3 },
    NOK: { Percent: 2.9, Fixed: 2 },
    DKK: { Percent: 2.9, Fixed: 1.8 },
    SEK: { Percent: 2.9, Fixed: 1.8 },
    JPY: { Percent: 3.6, Fixed: 0 },
    MXN: { Percent: 3.6, Fixed: 3 },
};

const calcFee = (amount, currency) => {
    let _fee = fees[currency];
    amount = parseFloat(amount);
    let total = (amount + parseFloat(_fee.Fixed)) / (1 - parseFloat(_fee.Percent) / 100);
    let fee = total - amount;

    return {
        actualAmount: amount,
        fee: fee.toFixed(2),
        total: total.toFixed(2),
    };
};
const dollerToCent = ({ amount }) => {
    //convert amount into doller
    let { actualAmount, fee, total } = calcFee(amount, 'USD');
    actualAmount = actualAmount * 100;
    return { actualAmount, fee, total };
};

async function createCharge({ tokenId, amount, description }) {
    let logger = `createCharge:`;
    console.log(`${logger} :  creating charges`);
    const charge = await stripe.charges.create({
        amount: dollerToCent({ amount }).actualAmount,
        currency: 'usd',
        source: tokenId,
        description: description
    });
    if (charge.status !== 'succeeded') {
        throw CustomError({ message: 'Payment failed.', statusCode: HTTP_CODES.INTERNAL_SERVER_ERROR })
    }
    console.log(`${logger} :  charged: status is :`, charge.status);

    return charge;
}

async function checkout(logName, card, amount) {
    console.log(`${logName}: checkout: started , amount:`, amount);
    // create token
    const token = await createToken(card);

    // create charges
    const charge = await createCharge({ tokenId: token.id, amount });

    return charge;
}

module.exports = {
    checkout
}
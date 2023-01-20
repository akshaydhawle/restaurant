const { default: mongoose } = require("mongoose");
const config = require('config');

function connectToMongodb() {
    const url = config.get('MONGODB_URL');
    mongoose.set('strictQuery', false);
    mongoose.connect(url)
        .then(() => console.log('connected to mongodb...'))
        .catch(err => console.log('error while connecting to mongodb', JSON.stringify(err)));
}

module.exports = {
    connectToMongodb
}
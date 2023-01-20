const express = require('express');
const { connectToMongodb } = require('./startups/db');
const { connectToRouter } = require('./startups/router');
const { connectToServer } = require('./startups//server');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongodb();
connectToRouter(app);
connectToServer(app);
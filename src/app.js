'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Conexão com BD
mongoose.connect("mongodb+srv://<username>:<password>@cluster0-mqoji.mongodb.net/test?retryWrites=true");

const app = express();
const router = express.Router();

//Carrega Models
const Product = require('./models/product').default;

//carregar Rotas
const indexRoute = require('./routs/index-route');
const productsRoute = require('./routs/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', indexRoute);
app.use('/products', productsRoute);

module.exports = app;

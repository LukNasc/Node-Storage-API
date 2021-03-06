'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req,res,next) =>{
    Product.find({},'title price description active tags slug')
     .then(product => { 
        res.status(200).send({
           product
        });
    })
    .catch(e => { 
        res.status(400).send({e});
    });
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save()
    .then(x => { 
        res.status(201).send({
            message: 'Produto cadastrado com sucesso.',
            code: '201'
        });
    })
    .catch(e => { 
        res.status(400).send({
            message: "Falha ao cadastrar produto.",
            code: "400"
        });
    });
};

exports.put = (req, res, next) => {
    //req.params.id -> pega um parâmetro na requisição
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};

'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controler');

router.post('/', controller.post);
router.get('/', controller.get);


//Sem funcionalidade
router.put('/:id', controller.put);
//sem funcionalidade
router.delete('/',controller.delete);

module.exports = router;
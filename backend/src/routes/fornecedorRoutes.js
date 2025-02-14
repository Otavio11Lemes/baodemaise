const express = require('express');
const fornecedorController = require('../controllers/fornecedorController');
const router = express.Router();

router.post('/fornecedores', fornecedorController.createFornecedor);
router.get('/fornecedores', fornecedorController.getFornecedores);

module.exports = router;
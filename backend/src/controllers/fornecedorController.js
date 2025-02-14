const Fornecedor = require('../models/Fornecedor');

exports.createFornecedor = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.create(req.body);
    res.status(201).json(fornecedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFornecedores = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.findAll();
    res.status(200).json(fornecedores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
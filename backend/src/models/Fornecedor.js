const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fornecedor = sequelize.define('Fornecedor', {
  nome: { type: DataTypes.STRING, allowNull: false },
  cnpj: { type: DataTypes.STRING, unique: true },
  endereco: { type: DataTypes.STRING },
  telefone: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, validate: { isEmail: true } },
});

module.exports = Fornecedor;
import React, { useState } from 'react';
import axios from 'axios';

const FornecedorForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/fornecedores', formData);
      alert('Fornecedor cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar fornecedor.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
      <input type="text" placeholder="CNPJ" value={formData.cnpj} onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })} />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FornecedorForm;
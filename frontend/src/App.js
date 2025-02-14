import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FornecedorForm from './components/FornecedorForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FornecedorForm />} />
    </Routes>
  </Router>
);

export default App;
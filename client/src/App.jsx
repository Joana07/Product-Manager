import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import EditProduct from './views/EditProduct';
import ProductDetail from './views/ProductDetail';
import Main from './components/Main'

function App() {
  const [list, setList] = useState([]); 

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main list={list} setList={setList} />} />
      <Route path="/products/:id" element={<ProductDetail list={list} setList={setList} />} />
      <Route path="/products/edit/:id" element={<EditProduct list={list} setList={setList} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
  
  );
}

export default App;

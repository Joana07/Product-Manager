import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import axios from 'axios';

const Main = () => {
  const [list, setList] = useState(null);  

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/products')
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ProductForm list={list} setList={setList} />
      <hr />
      <ProductList list={list} setList={setList} />
    </div>
  );
}

export default Main;
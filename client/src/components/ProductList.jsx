import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
  const { list, setList } = props;

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
        const updatedList = list.filter((product) => product._id !== productId);
        setList(updatedList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h2>All Products:</h2>
      {
        list ? (
          list.length > 0 ? (
            list.map((product) => (
              <div key={product._id}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
                <Link to={`/products/edit/${product._id}`}>Edit</Link>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )
        ) : (
          <p>Loading products...</p>
        )
      }
    </div>
  );
}

export default ProductList;
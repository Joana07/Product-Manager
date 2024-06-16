import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const EditProduct = (props) => {
  const { list, setList } = props;
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newDescription, setNewDescription] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/'+id)
      .then((response) => {
        setNewTitle(response.data.title);
        setNewPrice(response.data.price);
        setNewDescription(response.data.description);
      })
      .catch((err) => {
        console.log("Error with axios get", err);
      });
  }, [id]);
  
  const editProduct = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/products/edit/'+id, {
      title: newTitle,
      price: newPrice,
      description: newDescription
    })
      .then((response) => {
        const newList = list.filter((product) => {
          return product._id !== response.data._id;
        });
        setList([...newList, response.data]);
        navigate('/');
      })
      .catch((err) => {
        console.log("Error with axios put", err);
      });
  };
  

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={editProduct}>
        <div>
          <label>Update Title:</label>
          <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        </div>
        <div>
          <label>Update Price:</label>
          <input type='number' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
        </div>
        <div>
          <label>Update Description:</label>
          <input type='text' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
        </div>
        <button>Update</button>
      </form>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default EditProduct;
import React, { useState } from 'react';
import axios from 'axios';
import styles from "./Product.module.css";

const ProductForm = (props) => {
  const { list, setList } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/products', {
      title,
      price,
      description
    })
    .then(response => {
      if (list) {
        setList([...list, response.data]);
      } else {
        setList([response.data]);
      }
    })
    .catch(err => console.log(err));

    setTitle("");
    setPrice(0);
    setDescription("");
  }

  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={onSubmitHandler}>
        <div  className={styles.dFlex}>
          <label>Title</label><br/>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div  className={styles.dFlex}>
          <label>Price</label><br/>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div  className={styles.dFlex}>
          <label>Description</label><br/>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ProductForm;
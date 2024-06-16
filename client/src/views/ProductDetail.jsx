import React ,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'

const  ProductDetail= ()=> {
    const {id}=useParams();
    const [oneProduct,setOneProduct]=useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            setOneProduct(res.data)

        })
        .catch((err)=>{
            console.log(err)
    })
    },[]);



  return (
    <div>
        <p>{oneProduct.title}</p>
        <p>Price: ${oneProduct.price}</p>
        <p>Description: {oneProduct.description}</p>
        <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ProductDetail
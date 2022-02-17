import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import SingleProduct from './SingleProduct';
import "./styles.css";
import { Cart } from '../Context';


const Home = () => {
  

  const [products, setProducts] = useState([])
  

  const fetchProductsArray = async () => {
    try{
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductsArray()
  }, [])
  


  
  return (
    <div className='productContainer'>{products.map((prod)=>(
        <SingleProduct prod={prod} key={prod.id}
        />
    ))}</div>
  )
}

export default Home
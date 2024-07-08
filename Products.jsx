import React, { useEffect, useState } from 'react'
import "./component.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
export default function Products() {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    const handleAdd = (product)=>{
        dispatch(addToCart(product))

    }

    useEffect(()=>{
        const fetchProducts = async()=> {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            
            setProducts(data)

          
        }
        fetchProducts()
    },[])
  return (
    <div className='product-wrapper'>
      {products.map((product)=>{
        return(
            <div key={product.id} className='product'>
            <img className='image' src={product.image} alt="image" />
            <h6>{product.title}</h6>
            <p>{product.price}</p>
            <button className='btn' onClick={()=>handleAdd(product)}>Add to cart</button>
        </div>
        )})}

    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/cartSlice';
import "../components/component.css"


export default function Cart() {
    const item = useSelector(state => state.cart);
    const dispatch = useDispatch();
    function handleDelete(itemId){
        dispatch(removeFromCart(itemId))
    }
  return (
     <>
     <h1 style={{textAlign:"center"}}>Cart Items {item.length}</h1>
    <div className='product-wrapper'>

      {item.map((item)=>{
        return(
            <div key={item.id} className='product'>
            <img className='image' src={item.image} alt="image" />
            <h6>{item.title}</h6>
            <p>{item.price}</p>
            <button className='btn' onClick={()=>handleDelete(item.id)}>Remove</button>
        </div>
        )})}
        </div>
        </>

  )
}

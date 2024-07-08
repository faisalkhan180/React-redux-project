import React from 'react'
import "./component.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Navbar() {
    const item = useSelector((state)=> state.cart)
  return (
    <div className='nav-bar'>
        <span className='logo'>Logo</span>

        <div className='links'>
            <Link className='nav-link' to="/"> Home </Link>
            <Link className='nav-link' to="/cart"> Cart </Link>

            <span className='cart-count'>
                Cart Items {item.length}
            </span>
        </div>
    </div>
  )
}

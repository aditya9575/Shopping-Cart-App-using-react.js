import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

// importing shopping icon
import {ShoppingCart} from "phosphor-react";

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='links'>
        <Link to="/">Shop</Link>
        <Link to="/cart">
        {/* this is a react phosphor icon */}
            <ShoppingCart size={32}/>
        </Link>
     </div>
    </div>
  )
}

export default Navbar
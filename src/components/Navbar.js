import React from 'react';
import cart from "../assets/cart.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="nav">
    <Link to ="/">
         <h3 className='navTitle '>
                     Karo Abhayaas
        </h3>
    </Link>
      
        <div className='joinrect'>
                <p className='jointext'>JOIN US</p>
        </div>
        
        <Link to ="/classes">
        <h3 className='navoptions classes'>Classes</h3>
        </Link>
        <Link to = "/products">
        <h3 className='navoptions products'>Products</h3>
        </Link>
        <Link to = "/aboutus">
        <h3 className='navoptions aboutus'>About Us</h3>
        </Link>
        <Link to ="/profile">
        <div className='profileImg'>
            <img src={profile} className='profile' alt='profile'/>
        </div>
        </Link>
        <Link to ="/cart">
        <div className='cartpng'>
            <img src={cart} className='cart' alt='cart'/>  
        </div>
        </Link>
    </div>
  )
}

export default Navbar;
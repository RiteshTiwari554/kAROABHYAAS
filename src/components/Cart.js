import React from 'react'
import downArrow from '../assets/downArrow.png'
import Navbar from './Navbar';
import Checkout from './Checkout';
import { useState } from 'react';
import DeleteCart from './DeleteCart';

const Cart = () => {
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  return (
    <>
    <div className={`cartbody ${(isCheckoutVisible || isDeleteVisible ) ? 'blurred' : ''}`}>
      <Navbar/>
    <div className='cartmenu'>
        <div className='carttop'>
        <h3 className='total'> TOTAL: ₹2000</h3>
        <button 
          className='checkout'
          onClick={() => setIsCheckoutVisible(true)}
        >
            <h3 className='checkouttext'>CHECKOUT</h3>
        </button>
        </div>
        <div className='cartitemsxyz'>
          <div className='cartiisCheckoutVisibleteminfo'>
            <h3 className='cartitemtitle'>QUESTION TITLE</h3>
            <h3 className='cartitemmodule'>MODULE:<span> &nbsp;&nbsp;NAME OF MODULE</span></h3>
            <h3 className='cartitemdate'>DATE:<span> &nbsp;&nbsp;&nbsp;&nbsp;10/04/2021</span></h3>
          </div>
        <div className='cartitemQuantity'>
              <p className='cartitemno'>1</p>
              <img src={downArrow} className='downarrimg'/>
        </div>
        <button 
        className='cartitemdelete'
        onClick={() => setIsDeleteVisible(true)}
        >
              <p className='cartitemno'>DELETE</p>
        </button>
        </div>
    </div>
    </div>
    {isCheckoutVisible && (
        <Checkout onClose={() => setIsCheckoutVisible(false)} />  )}

    {
      isDeleteVisible && (
        <DeleteCart onClose ={()=>setIsDeleteVisible(false)} />
      )
    }
    </>
  )
}

export default Cart;
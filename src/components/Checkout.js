import React from 'react'
import './css/checkout.css'
const Checkout = ({onClose}) => {

    const handleClick = () =>{
        onClose();

    }
  return (
    <div className='checkoutpopup'>
        <h3 className='font checkoutpopupaddttl'>
        PLEASE PROVIDE YOUR ADDRESS
        </h3>
        <div className='checkpopupcont'/>
        <button 
        className='cartitemdelete checkpopupcancel'
        onClick={handleClick}
        >
              <p className='cartitemno'>CANCEL</p>
        </button>
        <button 
        className='cartitemdelete checkpopupdelete'
        onClick={handleClick}
        >
              <p className='cartitemno'>SAVE</p>
        </button>
    </div>
  )
}

export default Checkout;
import React from 'react'
import './css/checkout.css'

const DeleteCart = ({onClose}) => {
    const handleClick = ()=>{
        onClose();
    }
  return (
    <div className='popupdeletecontainer'>
        <p className=' font popupdeletetitle'>
        DELETE BOOK FROM CART?
        </p>
        <button 
        className='cartitemdelete deletepopupcancel'
        onClick={handleClick}
        >
              <p className='cartitemno'>CANCEL</p>
        </button>
        <button 
        className='cartitemdelete deletepopupdelete'
        onClick={handleClick}
        >
              <p className='cartitemno'>DELET</p>
        </button>

    </div>
  )
}

export default DeleteCart
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Script = () => {
  return (
    <div className='script'>
         <Outlet/> 
    </div>
  )
}

export default Script
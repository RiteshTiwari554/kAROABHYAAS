import React from 'react';
import './css/classCss.css';
import Navbar from './Navbar';
import { classData } from '../utils/data';
import Classtemplate from './Classtemplate';

const Classes = () => {
  return (
    <div className='classes1'>
        <Navbar/>
        <div className='group18'>
        
        {
            classData.map((data, index)=>{
                return(
                    <Classtemplate key={index} {...data} />
                );
            })
        }
         <p className='classesnumbers15'>1 2 3 4 5 </p>
        </div>
    </div>
  )
}

export default Classes
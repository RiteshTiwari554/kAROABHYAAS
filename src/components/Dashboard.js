import React from 'react'
import './css/dashboard.css'
import Navbar from './Navbar'
import Rect5 from './Rect5'
import Orders from './Orders'
import Tests from './Tests'
import QA from './QA'
import {Outlet, Link} from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
    const [isOrdersClicked, setIsOrdersClicked] = useState(false);
  const [isTestsClicked, setIsTestsClicked] = useState(false);
  const [isQAClicked, setIsQAClicked] = useState(false);

  // Function to handle click for each button
  const handleOrdersClick = () => {
    setIsOrdersClicked(true);
    setIsTestsClicked(false);
    setIsQAClicked(false);
  };

  const handleTestsClick = () => {
    setIsOrdersClicked(false);
    setIsTestsClicked(true);
    setIsQAClicked(false);
  };

  const handleQAClick = () => {
    setIsOrdersClicked(false);
    setIsTestsClicked(false);
    setIsQAClicked(true);
  };
  return (
    <div className='dash'>
        <Navbar/>
        <div className='gp6'>
            <Rect5 />
            <div className='gp16'>
            <Link to ="order">
                <button className='gp6btn'
                onClick={handleOrdersClick}
                style={{
                        background: isOrdersClicked ? 'black' : 'white',
                    }}>
                    <span className='orderspan'
                    style={{color: isOrdersClicked ? 'white' : 'black'}}>ORDERS</span>
                </button>
                </Link>
                <Link to ="tests">
                <button 
                className='gp6btn btntests'
                onClick={handleTestsClick}
                style={{
                        background: isTestsClicked ? 'black' : 'white',
                    }}>
                    <span className='orderspan'
                style={{color: isTestsClicked ? 'white' : 'black'}}>TESTS</span>
                </button>
                </Link>
                <Link to ="qa">
                <button className='gp6btn tuf'
                 onClick={handleQAClick}
                 style={{
                         background: isQAClicked ? 'black' : 'white',
                     }}>
                    <span className='orderspan'
                    style={{color: isQAClicked ? 'white' : 'black'}}>Q/A</span>
                </button>
                </Link>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard
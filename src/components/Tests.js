import React from 'react'
import search from '../assets/searchicon.png';
import hamburger from '../assets/hamburger.png';

const Tests = () => {
  return (
    <div className='tests12mn3'>
        <div className='productSearchbox testsSearchBtx12'>
            <img src = {search} className='productsearchicon' alt='search' />
            <img src = {hamburger} className='producthamburgoricon' alt='hamburger'/>

        </div>
        <div className='testsDet'>
            <p className='grp12id testName'>TEST NAME</p>
            <p className='tstMod'>MODULE: &nbsp;<span>Name OF MODLE</span></p>
            <p className='tstMod tstdate'>DATE: &nbsp;&nbsp;&nbsp;<span>10/04/2021</span></p>
            <p className=' tstMod tstMarks'>MARKS: <span>100</span></p>

            <div className='tstMod tstDUR'>DURATION:&nbsp;<span className='grp12addspan'>30 Mins</span></div>
            <div className='tstbtn'>
                <p className='tstbtntitle'>START</p>
            </div>
        </div>

    </div>
  )
}

export default Tests
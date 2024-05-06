import React from 'react'
import search from '../assets/searchicon.png';
import hamburger from '../assets/hamburger.png';
const QA = () => {
  return (
    <div className='qa'>
      <div className='productSearchbox QASearch'>
            <img src = {search} className='productsearchicon' alt='search' />
            <img src = {hamburger} className='producthamburgoricon' alt='hamburger'/>
        </div>
        <p className='font or'>or</p>
        <div className='tstbtn QAbtn1'>
                <p className='tstbtntitle QAbtn1txt'>ASK A NEW QUESTION</p>
        </div>

        <div className='testsDet QAtemp'>
            <p className='grp12id testName QAqueTtl'>QUESTION TITLE</p>
            <p className='tstMod '>MODULE: &nbsp;<span>NAME OF MODULE</span></p>
            <p className='tstMod tstdate'>DATE: &nbsp;&nbsp;&nbsp;<span>10/04/2021</span></p>
            <div className='tstbtn VR'>
                <p className='tstbtntitle VRtxt'>VIEW REPLY</p>
            </div>
        </div>
    </div>
  )
}

export default QA
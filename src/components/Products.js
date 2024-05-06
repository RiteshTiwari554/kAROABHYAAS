import React from 'react';
import './css/productCss.css';
import Navbar from './Navbar';
import search from '../assets/searchicon.png';
import hamburger from '../assets/hamburger.png';
import { productdata } from '../utils/data';
import ProductItem from './ProductItem';


const Products = () => {
  return (
    <div className='productscontainer'>
        <Navbar/>
        <div className='productSearchbox'>
            <img src = {search} className='productsearchicon' alt='search' />
            <img src = {hamburger} className='producthamburgoricon' alt='hamburger'/>

        </div>
        {
          productdata.map((item,index)=>
        {
          return(
            <ProductItem key={index} {...item}/>
          );})
        }

    </div>
  )
}

export default Products;
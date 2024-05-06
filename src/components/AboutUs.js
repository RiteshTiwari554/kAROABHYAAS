import React from 'react'
import './css/aboutus.css';
import Navbar from './Navbar';

const AboutUs = () => {
  const textdata = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div className='aboutushead'>
      <Navbar/>
      <p className='aboutustext aboutlorem1'>{textdata}</p>
      <p className='aboutustext aboutlorem2'>{textdata}</p>
      <p className='aboutustext aboutlorem3'>{textdata}</p>
      <div className='aboutusprofilepng aboutprofile1'/>
      <div className='aboutusprofilepng aboutprofile2'/>
      <div className='aboutusprofilepng aboutprofile3'/>
        
    </div>
  )
}

export default AboutUs
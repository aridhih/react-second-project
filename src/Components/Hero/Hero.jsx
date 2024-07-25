import React from 'react'
import './Hero.css'
import shoeImage from "../Assets/shoe-image.png";

const Hero = () => {
  return (
    <div>
        <div className="container">
        <div className="info">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <h5>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h5>
      
        <button className="btn-shopnow"> Shop Now</button>
        <button className="btn-category">Category</button>
        
        </div>
        <div className="image">
        <img src={shoeImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
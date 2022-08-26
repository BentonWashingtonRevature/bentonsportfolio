import React from 'react';
import Photo from '../../assets/IMG_0031.JPG'

export default function Contact() {
  return (
    <div className='box'>
      <img src={Photo} />
      <div>
        <h1>Contact </h1>
        <p>
        <p>Mobile: 678-953-0719</p>
        <p>Email: washingtonbenton@gmail.com</p>
        <a href="https://github.com/bentonwashington">Github</a>
        <br/>
        <a href="https://www.linkedin.com/in/bentonwashington/">LinkedIn</a>
        <br/>
      </p>
      </div>

     
    </div>
  );
}
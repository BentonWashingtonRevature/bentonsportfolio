import React from 'react';
import Photo2 from '../../assets/IMG_0123.jpeg'
import '../../styles/Resume.css'

export default function Resume() {
  return (
    <div className="box">
      <img src={Photo2} />
      <div>
        <h1>Resume</h1>
        <a className="abc" href="https://docs.google.com/document/d/1lV4pwrNcRh2wcB6qHe2Ei9jJ8U8X7A6v/edit?usp=sharing&ouid=100103742977356997279&rtpof=true&sd=true">
          Click Here!</a>
      </div>

      
    </div>
  );
}

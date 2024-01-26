// Sandwiches.js

import React from "react";
import './Sandwiches.css';

const Sandwiches = () => {
  return (
    <div className="header-sandwiches-container">
      <h2>Sandwiches</h2>
      <div className="header-img">
        <img src="/yum-yum-imgs/sanwich-header-removebg-preview.png" alt="header-sanwich" />
      </div>
      

      <div className="sandwiches-item">
        <p>Turkey Cuban Sandwich</p>
        <img src="/yum-yum-imgs/tcs-removebg-preview.png" alt="Turkey-cuban" />
        <p>Description</p>
        <p>$10.95</p>
      </div>

      <div className="sandwiches-item">
        <p>Thick'ums Chicken n Cheese Sub</p>
        <img src="/yum-yum-imgs/Thinkstock2-removebg-preview.png" alt="Chicken-sub" />
        <p>Input description </p>
        <p>$12.99</p>  
      </div>

      <div className="sandwiches-item">
        <p>Delish Toasted Scrumpious BLT Sandwich </p>
        <img src="/yum-yum-imgs/yum-yum-imgs/BLT-removebg-preview.png" alt="BLT-sandwich" />
        <p>Input description </p>
        <p>$12.99</p>  
      </div>
    </div>
  )
};

export default Sandwiches;

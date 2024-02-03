import React from "react";
import './Sandwiches.css';
import Footer from './Footer';

const Sandwiches = () => {
  return (
    <div className="header-food-container">
        <img className src="/yum-yum-imgs/sandwich-header.jpg" alt="sandwich-header" />
      <h2 className="title">Sandwiches</h2>
      
      <div className="food-container">
        <div className="food-item">
          <img src="/yum-yum-imgs/tcs-removebg-preview.png" alt="Turkey-cuban" />
          <p>Turkey Cuban Panni</p>
          <p>$10.95</p>
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/Thinkstock2-removebg-preview.png" alt="Chicken-sub" />
          <p>Chicken & Cheese Sub</p>
          <p>$12.99</p>  
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/BLT-removebg-preview.png" alt="BLT-sandwich" />
          <p>Toasted BLT Sandwich</p>
          <p>$12.99</p>
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/BLT-removebg-preview.png" alt="BLT-sandwich" />
          <p>Toasted BLT Sandwich</p>
          <p>$12.99</p>
        </div>
      </div>
    </div>
  )
};

export default Sandwiches;

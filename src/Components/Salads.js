import React from "react";
import "./Salads.css"; 

const Salads = () => {
  return (
    <div className="header-food-container">
      <img src="/yum-yum-imgs/salads-header.jpg" alt="salads-header" />
      <h2 className="title">Salads</h2>
      
      <div className="food-container">
        <div className="food-item"> {/* Fix class name here */}
          <img src="/yum-yum-imgs/123-removebg-preview.png" alt="Ceaser" />
          <p>Grilled Chicken Caesar Salad</p>
          <p>$15.95</p>
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/chickensalad-removebg-preview.png" alt="Chicken-salad" />
          <p>Crispy Chicken Mixed Salad</p>
          <p>$12.99</p>  
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/CapreseSalad-removebg-preview.png" alt="Caprese" />
          <p>Italian Olive Caprese Salad</p>
          <p>$12.99</p>  
        </div>
      </div>
    </div>
  );
};

export default Salads;

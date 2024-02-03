import React from "react";
import './Soups.css';
import Footer from './Footer';

const Soups = () => {
  return (
    <div className="header-food-container">
      <img src="/yum-yum-imgs/soup-header.jpg" alt="header-img" />
      <h2 className="title">Soups</h2>

      <div className="food-container">
        <div className="food-item">
          <img src="/yum-yum-imgs/tomato-s-removebg-preview.png" alt="Tomato-Soup" />
          <p>Spicy Tomato Soup</p>
          <p className="price">$15.95</p>
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/smokedSalmonSoup-removebg-preview.png" alt="Salmon-soup" />
          <p>Slow cooked smoked salmon soup.</p>
          <p className="price">$12.99</p>
        </div>
        <div className="food-item spicy-chili">
          <img src="/yum-yum-imgs/chili-removebg-preview.png" alt="Chili" />
          <p>Spicy Chili</p>
          <p className="price">$12.99</p>
        </div>
      </div>
    </div>
  );
};

export default Soups;

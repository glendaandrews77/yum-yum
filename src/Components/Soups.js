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

        <div className="food-item wonton">
          <img src="/yum-yum-imgs/wonton-soup-removebg-preview.png" alt="Wonton" />
          <p>Wonton Soup</p>
          <p className="price">$11.99</p>
        </div>

        <div className="food-item split-soup">
          <img src="/yum-yum-imgs/split-soup-removebg-preview.png" alt="Split-Pea" />
          <p>Split-Pea Soup</p>
          <p className="price">$14.99</p>
        </div>

        <div className="food-item beef-stew">
          <img src="/yum-yum-imgs/b-c-p-stew-removebg-preview-removebg-preview.png" alt="Beef Stew" />
          <p>Beef Stew</p>
          <p className="price">$16.99</p>
        </div>

        <div className="food-item veg-ramen">
          <img src="/yum-yum-imgs/veg-ramen-removebg-preview.png" alt="Veggie Ramen" />
          <p>Veggie Ramen</p>
          <p className="price">$15.99</p>
        </div>

        <div className="food-item shrimp=ramen">
          <img src="/yum-yum-imgs/shrimp-ramen-removebg-preview.png" alt="shrimp=Ramen" />
          <p>Shrimp Ramen</p>
          <p className="price">$16.99</p>
        </div>

        <div className="food-item spicy-ramen">
          <img src="/yum-yum-imgs/spicy-ramen-removebg-preview.png" alt="spicy-ramen" />
          <p>Spicy Ramen</p>
          <p className="price">$13.99</p>
        </div>
       
      </div>
    </div>
  );
};

export default Soups;

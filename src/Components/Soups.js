import React from "react";
import './Soups.css';


const Soups = () => {
    return (
      <div className="header-soup-container">
        <img src="/yum-yum-imgs/boynsoup-removebg-preview.png" alt="header-img" />
        <h2>Soups</h2>
        <div className="soups-item">
          <p>Tomato Tamato Soup</p>
          <img src="/yum-yum-imgs/tomato-s-removebg-preview.png" alt="Tomato-Soup" />
          <p>Housemade Hot Tomato Soup</p>
          <p>$15.95</p>
        </div>
        <div className="soups-item">
          <p>Delish Smoked Salmon Soup</p>
          <img src="/yum-yum-imgs/smokedSalmonSoup-removebg-preview.png" alt="Salmon-soup" />
          <p>Slow cooked smoked salmon soup.</p>
          <p>$12.99</p>  
        </div>
        <div className="soups-item">
          <p>Housemade Chicken Noodle Soup</p>
          <img src="/yum-yum-imgs/chili-removebg-preview.png" alt="Chili" />
          <p>Made with love chicken noodle soup. </p>
          <p>$12.99</p>  
        </div>
  
     </div>
    )
  };




export default Soups;
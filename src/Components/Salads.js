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
          <p>$15.99</p>  
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/CapreseSalad-removebg-preview.png" alt="Caprese" />
          <p>Italian Olive Caprese Salad</p>
          <p>$12.99</p>  
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/cowboy-removebg-preview.png" alt="Cowboy Salad" />
          <p>Cowboy Chicken Salad</p>
          <p>$18.99</p>  
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/homeimg-removebg-preview.png" alt="Spring-salad" />
          <p>Spring Childen Salad</p>
          <p>$.99</p>  
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/strawberry-salmon-salad-removebg-preview.png" alt="Salmon-salad" />
          <p>Strawberry Salmon Salad</p>
          <p>$20.99</p>  
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/salad14-removebg-preview.png" alt="Mac Salad" />
          <p>Creamy Mac Salad</p>
          <p>$1.99</p>  
        </div>
        <div className="food-item">
          <img src="/yum-yum-imgs/shrimp-pasta-salad-removebg-preview.png" alt="Shrimp Salad" />
          <p>Shrimp Salad</p>
          <p>22.99</p>  
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/salad11-removebg-preview.png" alt="Greek Salad" />
          <p>Greek Salad</p>
          <p>$22.99</p>  
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/hotgirl-chicken-salad-removebg-preview.png" alt="Caprese" />
          <p>Hot Girl Chicken Salad</p>
          <p>$25.99</p>  
        </div>

      </div>
    </div>
  );
};

export default Salads;

import React from "react";
import "./Salads.css"; 

const Salads = () => {
  return (
    <div className="header-salad-container">
      <img src="/yum-yum-imgs/veggies-removebg-preview.png" alt="header-img1" />
    <h1 className="salad-h1">
        Our Amazing Freshly Made Salads
    </h1>
      <div className="salad-item">
        <p>Sexy Chicken Caesar Salad</p>
        <img src="/yum-yum-imgs/salad3.jpg" alt="Ceaser" />
        <p>Delish grilled chicken breast, fresh romaine lettuce, crisp housemade croutons, & house-made Caesar salad dressing.</p>
        <p>$15.95</p>
      </div>
      <div className="salad-item">
        <p>Yummy Chicken Salad</p>
        <img src="/yum-yum-imgs/chickensalad-removebg-preview.png" alt="Chicken-salad" />
        <p>Input </p>
        <p>$12.99</p>  
      </div>
      <div className="salad-item">
        <p>Delish Caprese Salad</p>
        <img src="/yum-yum-imgs/CapreseSalad-removebg-preview.png" alt="Caprese" />
        <p>Our Caprese salad is a classic Italian salad with juicy tomatoes, mozzarella, basil leaves, & drizzled with olive oil & balsamic vinegar. </p>
        <p>$12.99</p>  
      </div>

   </div>
  )
};

export default Salads;

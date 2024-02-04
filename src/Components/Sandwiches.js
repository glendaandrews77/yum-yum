import React from "react";
import './Sandwiches.css';
import Footer from './Footer';

const Sandwiches = () => {
  return (
    <div className="header-food-container">
      <img className="header-image" src="/yum-yum-imgs/sandwich-header.jpg" alt="sandwich-header" />
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
          <p>$15.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/different-types-of-sandwiches-removebg-preview-removebg-preview.png" alt="Caprese Sub" />
          <p>Caprese Sub</p>
          <p>$18.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/philly-steak-removebg-preview.png" alt="Philly Cheese" />
          <p>Philly Cheese Sub</p>
          <p>$21.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/grinder-removebg-preview.png" alt="Grinder sub" />
          <p>Grinder Sub</p>
          <p>$18.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/roastbeef-sub-removebg-preview.png" alt="Roastbeef-sub" />
          <p>Roastbeef Sub</p>
          <p>$21.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/grilled-cheese-removebg-preview.png" alt="Chicken-panni" />
          <p>Grilled Cheese Sandwich</p>
          <p>$14.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/chicken-panni-removebg-preview.png" alt="Chicken-panni" />
          <p>Grilled Panni</p>
          <p>$14.99</p>
        </div>
        
        <div className="food-item">
          <img src="/yum-yum-imgs/tuna-salad-sandwich-removebg-preview.png" alt="Tuna-sandwich" />
          <p>Tuna Salad Sandwich</p>
          <p>$12.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/fried-fish-removebg-preview.png" alt="Fried-fish" />
          <p>Fried Fish Sandwich</p>
          <p>$15.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/pork-belly-removebg-preview.png" alt="Pork-belly" />
          <p>Pork Belly Sandwich</p>
          <p>$18.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/veggie-burger1-removebg-preview.png" alt="Veggie-burger" />
          <p>Veggie Burger</p>
          <p>$11.99</p>
        </div>


        <div className="food-item">
          <img src="/yum-yum-imgs/chicken-sub-removebg-preview.png" alt="Chicken-Sub" />
          <p>Chicken Sub</p>
          <p>$12.99</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/mixed-meat-sub-removebg-preview.png" alt="trio-meat-sandwich" />
          <p>Trio Meat Sub</p>
          <p>$19.99</p>
        </div>
      </div>
    </div>
  )
};

export default Sandwiches;

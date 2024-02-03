import React from "react";
import "./Drinks.css";
import Footer from "./Footer";

const Drinks = () => {
  return (
    <div className="header-food-container">
      <img src="/yum-yum-imgs/drinkSZ.jpg" alt="drinks-header" />

      <h2 className="title">Drinks</h2>

      <div className="food-container">
        <div className="food-item">
          <img
            className="img-coffee"
            src="/yum-yum-imgs/coffee-removebg-preview.png"
            alt="coffee"
          />
          <p>Caf & Decaf Coffee</p>
          <p>$2.95</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/pepsi-removebg-preview.png" alt="Pepsi" />
          <p>Pepsi</p>
          <p>$2.95</p>
        </div>

        <div className="food-item">
          <img
            src="/yum-yum-imgs/dr_peper-removebg-preview.png"
            alt="dr pepper"
          />
          <p>Diet Pepsi</p>
          <p>$2.95</p>
        </div>

        <div className="food-item">
          <img
            src="/yum-yum-imgs/fanta-removebg-preview.png"
            alt="orange-fanta"
          />
          <p>Orange Fanta</p>
          <p>$2.95</p>
        </div>

        <div className="food-item">
          <img
            src="/yum-yum-imgs/bottle-water-removebg-preview.png"
            alt="water"
          />
          <p>Aqua Fina Bottle Water</p>
          <p>Bottle Water</p>
          <p>$2.95</p>
        </div>

        <div className="food-item">
          <img src="/yum-yum-imgs/hot-tea-removebg-preview.png" alt="tea" />
          <p>Flavorable Hot Teas</p>
          <p>$2.95</p>
        </div>
      </div>
    </div>
  );
};

export default Drinks;

import React from "react";
import "./Desserts.css";
import Footer from "./Footer";

const Desserts = () => {
  return (
    <div className="header-food-container">
      <img src="/yum-yum-imgs/1-desserts-header.jpg" alt="desserts-header" />
      <h2 className="title">Desserts</h2>

      <div className="food-container">
        <div className="food-item">
          <img
            src="/yum-yum-imgs/brownies-removebg-preview.png"
            alt="brownie"
          />
          <p>Chocolate Yummy Brownies</p>
          <p>$5.99</p>
        </div>
        <div className="food-item">
          <img
            src="/yum-yum-imgs/cakkkke-removebg-preview.png"
            alt="choc-cake"
          />
          <p>Yellow Chocolate Cake</p>
          <p>$3.99</p>
        </div>
        <div className="food-item">
          <img
            src="/yum-yum-imgs/choc-cros-removebg-preview.png"
            alt="Crossiant"
          />
          <p>Chocolate Croissant</p>
          <p>$4.99</p>
        </div>
        <div className="food-item">
          <img
            src="/yum-yum-imgs/chcolatechipcookie-removebg-preview.png"
            alt="choc-chip"
          />
          <p>Chocolate Chip Cookies</p>
          <p>$4.99</p>
        </div>
      </div>
    </div>
  );
};

export default Desserts;

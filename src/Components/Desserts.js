import React from "react";
import "./Desserts.css";

const Desserts = () => {
  return (
    <div className="header-desserts-container">
      <img src="/yum-yum-imgs/desserts-removebg-preview.png" alt="header-desserts-img1" />
     
    
    <h1 className="desserts-h1">
       Freshly Made Desserts
    </h1>
      <div className="salad-item">
        <p>Double Chocolate Yummy Brownies</p>
        <img src="/yum-yum-imgs/brownie-removebg-preview.png" alt="brownie" />
        <p>Housemade Chocolatie Brownies.</p>
        <p>$5.99</p>
      </div>
      <div className="salad-item">
        <p>Heavenly Yellow Chocolate Cake</p>
        <img src="/yum-yum-imgs/cakkkke-removebg-preview.png" alt="choc-cake" />
        <p>Moist chocolate yellow cake.</p>
        <p>$3.99</p>  
      </div>
      <div className="salad-item">
        <p>Delish Caprese Salad</p>
        <img src="/yum-yum-imgs/choc-cros-removebg-preview.png" alt="Crossiant" />
        <p>Chocolate Gooey Crossiant.</p>
        <p>$4.99</p>  
      </div>

   </div>
  )
};
export default Desserts;

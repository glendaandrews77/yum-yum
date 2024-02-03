import React from "react";
import { BsTelephoneInboundFill } from "react-icons/bs";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      
      
      <h1 className="welcome-text">Welcome to Salaoups</h1>

      <div className="hero-container">
        {/* <div className="organic-farming-container">
          <h2 className="organic-farming">Food Tip of the Month:</h2>
            <p>Getting to the point of being able to order a salad at a restaurant is a great achievement for many.However, not all salads are equally nutritious. In fact, some salads are smothered in high calorie dressings, which may make the salads even higher in calories than other items on the menu.Asking for the dressing on the side makes it a lot easier to control the portion size and amount of calories that you consume.</p>
        </div> */}

        <div className="main-img">
          <img src="/yum-yum-imgs/main.webp" alt="Main Image" />
        </div>

        <div className="sub-of-day">
          <p className="sod container">Sub of the Day:</p>
          <img src="/yum-yum-imgs/pork-bbq-sub.jpg" alt="Pork BBQ Sub" />
          <h4>Delish filling crockpot pork BBQ sub.</h4>
          <p>Price: $12.99</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

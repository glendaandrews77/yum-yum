import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <h1 className="primary-heading">
                        Our Delicious Food is Delivered Hot, Fresh, and Quickly.
            </h1>
                    <p className="primary-text">
                        Healthy and fresh dishes to satisy you and keep you healthy.
                    </p>
            <div className="home-image-container">
                    <img src="/yum-yum-imgs/salad6.jpg" alt=""/>
            </div>
            <div className="home-img-container">
                <div className="home-img-container">
                    <img src="/yum-yum-imgs/onpshape.webp" alt="" />
                </div>
                <div className="home-text-section">

                    <button className="secondary-button">
                        Order Now <FiArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;

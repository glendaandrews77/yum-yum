import React from "react";
import { BsTelephoneInboundFill } from "react-icons/bs";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-image-1-container">
                <img src="/yum-yum-imgs/sns2-header.jpg" alt="header-image" />
            </div>
            <div className="below-header">
                <h1 className="heading">
                    Home of the Salad Tossing & Soup Slurping
                </h1>
            </div>
            <div id="fresh-ingredients">
                We Offer a Variety of Fresh Salads & Hot Soups with TLC Every Day.
            </div>
            <div className="rest-info">
                <div className="image-container">
                    <img src="/yum-yum-imgs/rest-img3.jpg" alt="rest-img" />
                </div>
                <div className="info-container">
                    <p>Address: 5048 Salad Soup Lane, Virginia Beach, Virginia 23462</p>
                    <p>Hours: Monday - Friday 10:00 am to 9:00 pm Saturday & Sunday 11:00 am to 8:00 pm</p>
                    <p>Phone: (757) 478-7966</p>
                </div>
            </div>

            <div className="home-text-section">
                <button className="secondary-button">
                    Call Now <BsTelephoneInboundFill />
                </button>
                
            </div>
            
        </div>
    );
};

export default Home;

import React from 'react'

const About = () => {
    return (
        <div className="about-background-image-container">
            <div className="about-background-image-container">
                <img src="/yum-yum-imgs/onpshape.webp" alt="" />
            </div>
            <div className="about-section-image-container">
            <img src="/yum-yum-imgs/salad11.jpg" alt=""/>

            </div>
            <div className="about-section-text-container">
                <p className='primary-subheading'>About</p>
                <h1 className="primary-heading">
                    Eat to Live, Not Live to Eat.
                </h1>
                <p className="primary-text">
                Fruit and vegetables are low in calories and nutrient dense, which means they are packed with vitamins, minerals, antioxidants, and fiber. Focus on eating the recommended daily amount of at least five servings of fruit and vegetables and it will naturally fill you up and help you cut back on unhealthy foods. A serving is half a cup of raw fruit or veg or a small apple or banana, for example. Most of us need to double the amount we currently eat.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <p> Enter information instead of a video</p>
                </div>
            </div>
        </div>
    )
}

export default About;
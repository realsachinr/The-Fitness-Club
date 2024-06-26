import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import {motion} from "framer-motion"

const Hero = () => {

  const transition  = {type: 'spring', duration : 3}
  return (
    <div className="hero">
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div initial={{left: '238px'}} whileInView={{left: '8px' }} transition={{...transition, type: 'tween' }}>
            
          </motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* hero heading  */}
        <div className="hero-text">
          <div className="shape-you">
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              {" "}
              In Here we will help you to shpae and build body and live up your
              life to Fullest
            </span>
          </div>
        </div>

        {/* Figure */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* hero button */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{right : "-1rem"}}
          whileInView={{right : "4rem"}}
          transition={transition}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

      {/* hero image */}
      <img src={Hero_image} className="hero-image" alt="" />
      <img src={Hero_image_back} className="heart-image-back" />


      {/* Calories  */}
      <motion.div 
         initial={{left : "-20rem"}}
          whileInView={{left : "-35rem"}}
          transition={transition}
      className="calories">
        <img src={Calories} alt="" />
        <span>Calories Burned</span><span>220Kcal</span>
      </motion.div>
      </div>
    </div>
  );
};

export default Hero;

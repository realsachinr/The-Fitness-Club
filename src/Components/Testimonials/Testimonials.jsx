import React, { useState } from "react";
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const index = testimonialsData.length;
    
    function increamentHandler() {
      if (selected === index - 1) {
        setSelected(0);
      } else {
        setSelected(selected + 1);
      }
    }
     
   
    function decreamentHandler() {
      if (selected === 0) {
        setSelected(index - 1);
      } else {
        setSelected(selected - 1);
      }
    }
    
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span className="test-name"> {testimonialsData[selected].name}</span>
            - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
      <div></div>
      <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
            <img onClick={increamentHandler}  src={leftArrow} alt="" />
            <img onClick={decreamentHandler}  src={rightArrow}  alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

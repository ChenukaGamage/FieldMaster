import React from "react";
import "./Hero.css";
import { Button } from "@mui/material";
import video1 from "../../../assets/home_video.mp4";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div>
        
      </div>
      <div className="hero-content">
        <div className="hero-text-content">
          <h4>The Best Platform for Accurate measurements of your land</h4>
          <p>Trusted by beginners,marketers & 
        professionals ; Built with usability and performance in mind.</p>
        <div className="hero-btn">
        <button className="contact-btn">
              Download Now
            </button>
        </div>
        </div>
        
      </div>

      <div className="hero-video">
        
          <video width="100%" height="100%"  autoPlay loop muted>
          <source src={video1} type="video/mp4" />
          </video>
        

      
      </div>
     
    </section>
    
  );
};


export default Hero;
import React,{useEffect} from "react";
import "./styles/about.css";
import aboutimg from './imgs/laptop-portfolio.jpg';
import { Link } from  'react-router-dom';

function About() {
		useEffect(()=>{
				document.title = "About Me - Tarique Nasar"
		},[])
  return (
    <div className="about-container">
      <div className="about">
        <h1 className="about-header"> ABOUT ME</h1>
        <div className="about-para">
          <span id="span-hey">Hey</span>, I am   
          <div className="about-name"> 

				  <span>  Tarique Nasar.</span>
          </div>
				<br />I am a programmer and a 3rd year <br/>BTech student .<br /> I love
				coding , football and novels. <br/> check out my projects and blogs.
        </div>
			  <Link to="/contact">CONTACT</Link>
      </div>
      <div className="about-img">
        <img src={aboutimg} alt="" />
      </div>
    </div>
  );
}

export default About;

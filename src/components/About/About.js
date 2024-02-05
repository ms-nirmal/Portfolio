import React from 'react'
import './About.css'
import { PiMedalDuotone } from "react-icons/pi";
import { BiBriefcase } from "react-icons/bi";
import { GrContact } from "react-icons/gr";

function About() {
  return (
    <section className='about'>
        <div className="title">
            <h2>About Me</h2>
            <p>My Introduction</p>
        </div>
        <div className="self-info">
            <div className="picBox">
                <img src={require("../../Assets/photo_2024-02-04_10-05-49.jpg")} alt="" />
            </div>
            <div className="mainInfo">
                <div className="main">
                    <span className="Xp">
                        <BiBriefcase className='i'/>
                        <h5>Experience</h5>
                        <p>fresher</p>
                    </span>
                    <span className="projects">
                        <PiMedalDuotone className='i'/>
                        <h5>Projects</h5>
                        <p>2</p>
                    </span>
                    <span className="support">
                        <GrContact className='i'/>
                        <h5>Support</h5>
                        <p>24/7</p>
                    </span>
                </div>    
                <div className="descr">
                    <p>
                        MERN Stack developer, I can create websites with React,actually am a fresher looking forward to acheive many things...
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
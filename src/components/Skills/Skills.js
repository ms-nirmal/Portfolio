import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <section className='skills'>
        <div className="title">
            <h2>Skills</h2>
            <p>My Technical Skills</p>
        </div>
        <div className="skillset">
            <div className="frontend">
                <h2>Frontend</h2>
                <ul>
                    <li>HTML</li>
                        <p>Advanced</p>
                    <li>CSS</li>
                        <p>Advanced</p>
                    <li>JavaScript</li>
                        <p>Intermediate</p>
                    <li>React</li>
                        <p>Intermediate</p>
                    <li>Git</li>
                    <p>Intermediate</p>
                </ul>
            </div>
            <div className="backend">
                <h2>Backend</h2>
                <ul>
                    <li>PHP</li>
                        <p>Intermediate</p>
                    <li>Node Js</li>
                        <p>Basic</p>
                    <li>Express</li>
                        <p>Basic</p>
                    <li>MySQL</li>
                        <p>Intermediate</p>
                    <li>MongoDB</li>
                        <p>Intermediate</p>
                </ul>
            </div>
        </div>
        <div className="qualification">
                <h2>Qualifications</h2>
                <p className='subtitle'>My Qualification Journey</p>
            <div className="qualificationConatiner">
                <div className="qualificationData">
                    <div className="qualificationtitle"><h3>MERN Stack</h3></div>
                    <div className="qualificationsubTitle">Elysium Academy - Cbe</div>
                    <div className="calender">6 months - 2023</div>
                </div>
                <div className="qualificationData">
                    <div className="qualificationtitle"><h3>BE CSE</h3></div>
                    <div className="qualificationsubTitle">KIT - Cbe</div>
                    <div className="calender">2018 - 2021</div>
                </div>
                <div className="qualificationData">
                    <div className="qualificationtitle"><h3>Diploma CSE</h3></div>
                    <div className="qualificationsubTitle">GRG Polytechnic - Cbe</div>
                    <div className="calender">2015 - 2018</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
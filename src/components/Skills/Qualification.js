import React from 'react';
import './Qualification.css';

function Qualification() {
  return (
    <section className='qualification'>
        <h2 className="title">Qualifications</h2>
        <span className='subtitle'>My Qualification Journey</span>
        
        <div className="qualificationContainer container">
            <div className="qualificationTab">
                <div className="qualificationButton button">
                    <div className="education active">Education</div>
                    <div className="courses">Experience</div>
                </div>
            </div>

            <div className="qualificationSection">
                <div className="qualificationContent qualificationContent_Active">
                    <div className="qualificationData">
                        <div>
                            <h3 className="qualificationTitle">Diploma In CSE</h3>
                            <span className='qualificationSubtitle'>GRG Polytechnic - Cbe</span>
                            <div className="calender">2015 - 2018</div>
                        </div>

                        <div>
                            <span className="rounder"></span>
                            <span className="line"></span>
                        </div>
                    </div>

                    <div className="qualificationData">
                        <div>
                            <div>
                                <span className="rounder"></span>
                                <span className="line"></span>
                            </div>

                            <h3 className="qualificationTitle">BE In CSE</h3>
                            <span className='qualificationSubtitle'>KIT - Cbe</span>
                            <div className="calender">2018 - 2021</div>
                        </div>
                    </div>

                    <div className="qualificationData">
                        <div>
                            <div>
                                <span className="rounder"></span>
                                <span className="line"></span>
                            </div>

                            <h3 className="qualificationTitle">BE In CSE</h3>
                            <span className='qualificationSubtitle'>KIT - Cbe</span>
                            <div className="calender">2018 - 2021</div>
                        </div>
                    </div>
                </div>

                <div className="qualificationContent">
                    <div className="qualificationData">
                        <div>
                            <h3 className="qualificationTitle">Web Developer</h3>
                            <span className='qualificationSubtitle'> Freelance </span>
                            <div className="calender">2023 - Present</div>
                        </div>

                        <div>
                            <span className="rounder"></span>
                            <span className="line"></span>
                        </div>
                    </div>

                    <div className="qualificationData">
                        <div>
                            <div>
                                <span className="rounder"></span>
                                <span className="line"></span>
                            </div>

                            <h3 className="qualificationTitle">Data Analyst</h3>
                            <span className='qualificationSubtitle'>Owler Inc - Cbe</span>
                            <div className="calender">2021 - 2023</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </section>
  )
}

export default Qualification
import React from 'react'
import './Home.css'
import { AiOutlineWhatsApp, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

function Home() {
  return (
    <home className='home'>
        <div className="selfIntro">
            <div className="icons">
                <a href="https://github.com/ms-nirmal" target="_blank" rel="noopener noreferrer"> <AiOutlineGithub className='i'/></a>
                <a href="https://wa.me/qr/VVCT6NR6Z7P3I1" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp className='i'/></a>
                <a href="https://www.instagram.com/_nirmal_ms?igsh=MXF3M3lkZDNyanJ6OA==" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className='i'/></a>
            </div>
            <div className="text">
                <div className="name">Nithyanandam <span>MS</span></div>
                <div className="role">MERN Stack developer</div>
                <p>I'm a Creative Passionated & Hardworking web designer..</p>
            </div>
            <div className="profilePic">
              <img src={require("../../Assets/photo_2024-02-04_10-05-49.jpg")} alt="" />
            </div>
        </div>
    </home>
  )
}

export default Home
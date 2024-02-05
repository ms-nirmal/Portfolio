import React from 'react'
import './Contact.css'
import { AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp  } from "react-icons/ai";

function Contact() {
  return (
    <section className='contact'>
        <div className="title">
            <h2>Contact Me</h2>
        </div>
        <div className="wrapper">
            <div className="contactDetails">
                    <div className="whatsapp">
                        <a href="https://wa.me/qr/VVCT6NR6Z7P3I1" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp className='i'/></a>
                        <h4>Whatsapp</h4>
                        <p>+91 99947 26941</p>
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com/_nirmal_ms?igsh=MXF3M3lkZDNyanJ6OA==" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className='i'/></a>
                        <h4>Instagram</h4>
                        <p>@Ms_Nirmal</p>
                    </div>
                    <div className="email">
                        <AiOutlineMail className='i'/>
                        <h4>Email</h4>
                        <p>nirmalicaniwill@gmail.com</p>
                    </div>
            </div>
            <div className="text">
                <div className="name">Nithyanandam <span>MS</span></div>
                <div className="role"><span>MERN</span> Stack developer</div>
            </div>
        </div>
    </section>
  )
}

export default Contact
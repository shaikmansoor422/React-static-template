import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
   <>
   <div className="footer">
    <div className="svgs">
        <div><a href="https://www.linkedin.com/in/shaik-mansoor422/"><CiLinkedin size={30}/></a></div>
        <div><a href="https://www.instagram.com/its.mansoor._/profilecard/?igsh=MWJ1eDd4eXpvY2VsMQ=="><FaInstagram size={30}/></a></div>
        <div><a href="https://github.com/shaikmansoor422/"><FaGithub size={30}/></a></div>

    </div>
    <div className="follow-us">Follow Us</div>
    <div className="design">Designed and developed by Mansoor</div>

</div>

   </>
  )
}

export default Footer

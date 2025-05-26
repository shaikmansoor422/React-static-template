import React from 'react'
import "./Navbar.css"
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="leftnav">
            <FaHome/>
            <div>

            </div>
            <div>Team</div>
            <div>Work</div>
            <div>Price</div>
            <div>Contact</div>
        </div>
        <div className="rightnav">
            <FaSearch/>
        </div>
    </nav>
    </>
  )
}

export default Navbar

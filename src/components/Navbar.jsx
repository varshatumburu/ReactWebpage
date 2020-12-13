import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider
        value={{ color: "#fff", style: { background: "transparent" } }}
      >
        <div className="navbar">
          <div className="navbar-container container">
            <NavLink to="/" className="navbar-icon" onClick={closeMobileMenu}>
              <img src={Logo} alt="Cat N Dog" />
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-links" onClick={closeMobileMenu}>
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/careers" className="nav-links" onClick={closeMobileMenu}>
                  Careers
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/contact" className="nav-links" onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
              
              
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

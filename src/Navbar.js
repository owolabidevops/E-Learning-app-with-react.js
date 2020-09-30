import { Search } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {    
       })
    }
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
    <Link to="/">
      <img
        className="nav-logo"
        src="https://myafrilearn.com/assets/img/afrilearn_logo.png"
        alt="myafrilearn"
      />
      </Link>
      <div className="nav-search">
      <input type="text" className="nav-searchinput"/>
      <Search className="nav-searchicon"/>
      </div>
      <div className="header-nav"> 
         <Link to="/" className="header-link">
         <div className="header-option">
              <span>Home</span>
         </div>

         </Link>
         <Link to="/" className="header-link">
         <div className="header-option">
              <span>About</span>
         </div>

         </Link>
         <Link to="/" className="header-link">
         <div className="header-option">
              <span>Faq</span>
         </div>

         </Link>
         <Link to="/login" className="header-link">
         <div className="header-option">
              <span>Login</span>
         </div>

         </Link>
         <Link to="/register" className="header-link">
         <div className="header-option">
              <span>Register</span>
         </div>

         </Link>
      </div>

    </nav>
  );
}

export default Navbar;

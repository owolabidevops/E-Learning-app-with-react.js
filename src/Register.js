import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <Link to="/">
        <img
          className="login-logo"
          src="https://myafrilearn.com/assets/img/afrilearn_logo.png"
          alt="myafrilearn"
        />
      </Link>
      <div className="login-container">
        <h1> Sign-Up</h1>
        <form>
          <h5>FirstName</h5>
          <input type="text" />
          <h5>LastName</h5>
          <input type="text" />
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <h5>ComFirmPassword</h5>
          <input type="password" />

          <button className="login-registerbtn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

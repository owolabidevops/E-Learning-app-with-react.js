import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://myafrilearn.com/assets/img/afrilearn_logo.png"
          alt="myafrilearn"
        />
      </Link>
      <div className="login-container">
        <h1> Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />

          <button className="login-signinbtn">Sign In</button>
        </form>
        <p>
          By continuing, you agree to myafrilearn's Conditions of Use and
          Privacy Notice.
        </p>
        <Link to="/register">
          {" "}
          <button className="login-registerbtn">Register</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Login;

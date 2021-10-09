import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-form-parent">
      <div className="register-form">
        <h1>Register</h1>
        <div className="">
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <p>
            Already Have Acount <Link to="/login">Log In</Link>
          </p>
          <button className="submitbutton-register" type="submit">
            Submit
          </button>
          <br />
          <button className="googlebutton-register" type="submit">
            Google Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

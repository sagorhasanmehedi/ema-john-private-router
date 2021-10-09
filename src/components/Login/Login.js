import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import UseAuth from "../../hooks/Usecontext";
import "./Login.css";

const Login = () => {
  const location = useLocation();
  const redirect_url = location.state?.from || "/shop";
  const histroy = useHistory();
  const { googlesignin } = UseAuth();
  const goGoole = () => {
    googlesignin()
      .then((result) => {
        histroy.push(redirect_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-form">
      <div className="form">
        <h1>Log in</h1>
        <div className="">
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <p>
            New to Amazon? <Link to="/register"> Create your account</Link>
          </p>
          <button className="submitbutton" type="submit">
            Submit
          </button>
          <br />
          <button onClick={goGoole} className="googlebutton" type="submit">
            Google Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/Usecontext";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { signout, user } = UseAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user.displayName && (
          <span style={{ color: "red", marginRight: "15px" }}>
            {user.displayName}
          </span>
        )}
        {user.displayName ? (
          <NavLink onClick={signout} to="/shop">
            Log Out
          </NavLink>
        ) : (
          <NavLink to="/login">Log In</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;

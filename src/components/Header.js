import React from "react";
import { NavLink } from "react-router-dom";

const navigationStyle = {
    border: "1px solid",
    background: "gray",
    color: "white",
    padding: "10px",
    margin:"10px",
    fontWeight:"bold"
  };
  

function Header() {
  return (
    <nav style={navigationStyle}>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      &nbsp;
      <NavLink activeClassName="active" to="/dashboard/1">
        First Post
      </NavLink>
      &nbsp;
      <NavLink activeClassName="active" to="/dashboard/100">
        Last Post
      </NavLink>
    </nav>
  );
}
export default Header;
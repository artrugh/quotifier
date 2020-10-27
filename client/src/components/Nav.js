import React from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li className="nav-link home-link">
          <Link to="/Home">Home</Link>
        </li>
        <li className="nav-link about-link">
          <Link to="/About">About</Link>
        </li>
        <li className="nav-link help-link">
          <Link to="/Help">Help</Link>
        </li>
        <li className="nav-link sign-in-link">
          <Link to="/SignIn">Sign In</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

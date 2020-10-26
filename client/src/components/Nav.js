import React from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Help">Help</Link>
        </li>
        <li>
          <Link to="/SignIn">Sign In</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

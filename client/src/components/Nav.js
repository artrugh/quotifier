import React from "react";
//---------Routing-------------------------------
// import { Link } from "react-router-dom";
//---------Routing-------------------------------
import Aux from "../hoc/Aux";

const Nav = (props) => {
  return (
    <Aux>
      <div className="nav_container">
        {/* <ul>
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
        </ul> */}
      </div>
    </Aux>
  );
};

export default Nav;

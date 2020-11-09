import React, { useState, useRef } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavLoginIconAvatar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="dropdown-menu1-container">
      <button onClick={onClick} className="dropdown-menu1-trigger">
        <FontAwesomeIcon
          className="workspace-menu-top-icon-single"
          icon={faUserCircle}
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`dropdown-menu1 ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <Link to="/Profile">Profile </Link>
          </li>
          <li>
            <Link to="/settings">Settings </Link>
          </li>
          <li>
            <Link to="/something else">something else </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLoginIconAvatar;

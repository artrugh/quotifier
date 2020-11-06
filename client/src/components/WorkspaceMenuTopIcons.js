import React, { useState, useRef } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const WorkspaceMenuTopIcons = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="workspace-menu-top-icons menu-container">
      <button onClick={onClick} className="menu-trigger">
        <FontAwesomeIcon
          className="workspace-menu-top-icon-single"
          icon={faUserCircle}
        />
      </button>

      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
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

      <button onClick={onClick} className="menu-trigger-logout">
        <FontAwesomeIcon
          className="workspace-menu-top-icon-single"
          icon={faEllipsisV}
        />
      </button>
    </div>
  );
};

export default WorkspaceMenuTopIcons;

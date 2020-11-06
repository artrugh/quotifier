import React, { useState, useRef } from "react";
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

      <FontAwesomeIcon
        className="workspace-menu-top-icon-single"
        icon={faEllipsisV}
      />

      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            <a href="/messages">Messages</a>
          </li>
          <li>
            <a href="/trips">Trips</a>
          </li>
          <li>
            <a href="/saved">Saved</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WorkspaceMenuTopIcons;

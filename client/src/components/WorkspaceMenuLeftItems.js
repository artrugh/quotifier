import React, { useState, useRef } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";
//----------------icons-----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WorkspaceMenuLeftItems = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <ul className="workspace-menu-left-items menu-container2">
      <li className="workspace-menu-left-items-link menu-trigger2">
        <button className="workspace-menu-left-items-button" onClick={onClick}>
          <FontAwesomeIcon
            className="workspace-menu-left-icon-single"
            icon={faArrowRight}
          />
        </button>{" "}
        Dropdown
      </li>

      <ul
        ref={dropdownRef}
        className={`menu2 ${isActive ? "active2" : "inactive2"}`}
      >
        <li>
          <Link to="/lastquote1">last quote 1 </Link>
        </li>
        <li>
          <Link to="/lastquote2">last quote 2 </Link>
        </li>
        <li>
          <Link to="/lastquote3">last quote 3 </Link>
        </li>
      </ul>

      <li className="workspace-menu-left-items-link">
        <Link to="/recent">Recent </Link>
      </li>

      <li className="workspace-menu-left-items-link">
        <Link to="/allquotes">All Quotes</Link>
      </li>

      <li className="workspace-menu-left-items-link">
        <Link to="/Tags">Tags</Link>
      </li>
    </ul>
  );
};

export default WorkspaceMenuLeftItems;

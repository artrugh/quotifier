import React, { useState, useRef } from "react";
//---------Routing-------------------------------
import { Link } from "react-router-dom";

const WorkspaceMenuLeftItems = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <ul className="workspace-menu-left-items menu-container2">
      <li className="workspace-menu-left-items-link menu-trigger2">
        <button onClick={onClick}> Dropdown</button>
        {/* <Link onClick={onClick} to="/recent">
          Recent
        </Link> */}
      </li>

      <ul
        ref={dropdownRef}
        className={`menu2 ${isActive ? "active2" : "inactive2"}`}
      >
        <li>
          <a href="/messages">last quote 1</a>
        </li>
        <li>
          <a href="/trips">last quote 2</a>
        </li>
        <li>
          <a href="/saved">last quote 2</a>
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

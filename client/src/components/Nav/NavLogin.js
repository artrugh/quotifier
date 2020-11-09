import React from "react";
import NavLoginIconAvatar from "./NavLoginIconAvatar";
import NavLoginIconThreeDots from "./NavLoginIconThreeDots";

function NavLogin() {
  return (
    <div className="nav-container-login">
      <div className="menu-top-icons ">
        <NavLoginIconAvatar />
        <NavLoginIconThreeDots />
      </div>
    </div>
  );
}

export default NavLogin;

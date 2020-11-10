import React from "react";
import FooterIcons from "./FooterIcons";
//---------Routing-------------------------------
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-all">
      <ul className="footer-left">
        <li className="footer-link contact-link">
          <Link to="/contact">
            <p className="text-footer">contact</p>
          </Link>
        </li>

        <li className="footer-link find-us-link">
          <Link to="/find-us">
            {" "}
            <p className="text-footer">find us</p>
          </Link>
        </li>

        <li className="footer-link team-link">
          <Link to="/team">
            {" "}
            <p className="text-footer">team</p>
          </Link>
        </li>
      </ul>

      <ul className="footer-middle">
        <li className="footer-link help-link">
          <Link to="/help">
            <p className="text-footer">help</p>
          </Link>
        </li>

        <li className="footer-link something-link">
          <Link to="/something">
            <p className="text-footer">something</p>
          </Link>
        </li>

        <li className="footer-link imprint-link">
          <Link to="/imprint">
            <p className="text-footer">imprint</p>
          </Link>
        </li>
      </ul>

      <div className="footer-right">
        <FooterIcons />
      </div>
    </div>
  );
}

export default Footer;

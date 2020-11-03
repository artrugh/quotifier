import React from "react";
import FooterIcons from "./FooterIcons";

function Footer() {
  return (
    <div className="footer-all">
      <div className="footer-left">
        <p className="text-footer">contact</p>
        <p className="text-footer">find us</p>
        <p className="text-footer">team</p>
      </div>
      <div className="footer-middle">
        <a href="https://github.com/NLJZ/quotifier">
          <p className="text-footer">help</p>
        </a>
        <p className="text-footer">imprint</p>
        <p className="text-footer">something</p>
      </div>
      <div className="footer-right">
        <FooterIcons />
      </div>
    </div>
  );
}

export default Footer;

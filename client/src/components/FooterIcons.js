import React from "react";
//------------------icons-------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faMailchimp } from "@fortawesome/free-brands-svg-icons";

function FooterIcons() {
  return (
    <div className="footer-icons">
      <a href="https://github.com/NLJZ/quotifier">
        <FontAwesomeIcon className="footer-icons-single" icon={faGithub} />
      </a>
      <FontAwesomeIcon className="footer-icons-single" icon={faMailchimp} />
      <FontAwesomeIcon className="footer-icons-single" icon={faEnvelope} />
    </div>
  );
}

export default FooterIcons;

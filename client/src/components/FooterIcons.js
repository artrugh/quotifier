import React from "react";
//------------------icons-------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faMailchimp } from "@fortawesome/free-brands-svg-icons";

function FooterIcons() {
  return (
    <div className="footer-icons">
      <FontAwesomeIcon className="footer-icons-single" icon={faGithub} />
      <FontAwesomeIcon className="footer-icons-single" icon={faMailchimp} />
      <FontAwesomeIcon className="footer-icons-single" icon={faEnvelope} />
    </div>
  );
}

export default FooterIcons;

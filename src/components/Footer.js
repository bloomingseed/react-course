import React from "react";
import "./../assets/stylesheets/Footer.css";
import iconTwitter from "./../assets/images/Twitter Icon.png";
import iconFacebook from "./../assets/images/Facebook Icon.png";
import iconInstagram from "./../assets/images/Instagram Icon.png";
import iconLinkedin from "./../assets/images/Linkedin Icon.png";
import iconGitHub from "./../assets/images/GitHub Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <nav className="nav-social-links">
        <a href="http://localhost:3000">
          <img src={iconTwitter} alt="Twitter icon" />
        </a>
        <a href="http://localhost:3000">
          <img src={iconFacebook} alt="Facebook Icon" />
        </a>
        <a href="http://localhost:3000">
          <img src={iconInstagram} alt="Instagram Icon" />
        </a>
        <a href="http://localhost:3000">
          <img src={iconLinkedin} alt="Linkedin icon" />
        </a>
        <a href="http://localhost:3000">
          <img src={iconGitHub} alt="GitHub icon" />
        </a>
      </nav>
    </div>
  );
}

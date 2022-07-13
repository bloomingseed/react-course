import React from "react";
import "./Navbar.css";
import logo from "./../images/globe.png";

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="logo" />
        <a href="http://localhost:3000">my travel journal.</a>
      </nav>
    </header>
  );
}

import React from "react";
import "./../assets/stylesheets/Info.css";
import pfp from "./../assets/images/pfp.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={pfp} alt="" className="info-img" />
      <h2>xceeded</h2>
      <h3>Software Engineer</h3>
      <p>nhattungnguyen.2kgl@gmail.com</p>
      <div class="info-button">
        <i class="fas fa-envelope"></i>Email
      </div>
    </div>
  );
}

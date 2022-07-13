import React from "react";
import "./Journal.css";
import marker from "./../images/marker.png";

export default function Journal(props) {
  let {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.item;
  return (
    <div className="journal">
      <div className="journal-img">
        <img src={imageUrl} alt="Journal thumbnail" />
      </div>
      <div className="journal-details">
        <div className="journal-location">
          <img src={marker} alt="Location marker" className="marker" />
          <span className="location-text">{location}</span>
          <a className="location-gmap" href={googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h3>{title}</h3>
        <p className="journal-date">
          {startDate} - {endDate}
        </p>
        <p className="journal-description">{description}</p>
      </div>
    </div>
  );
}

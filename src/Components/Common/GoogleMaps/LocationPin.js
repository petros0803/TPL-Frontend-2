import React from "react";
import { Icon } from "@iconify/react";
// import PIN from "../../../Assets/Icons/pin.png";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon
      icon="ph:map-pin-light"
      style={{ color: "red", height: "24px", width: "24px" }}
    />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;

import React from "react";
import TrailCard from "../Common/TrailCard/TrailCard";
import "./minibusses.scss";

const MiniBusses = () => {
  const trailsIdToDisplay = [5, 15, 17, 22, 23, 26, 28, 29, 30];
  return (
    <div className="minibusses--container">
      <div className="minibusses--title">Microbuze</div>
      <TrailCard trailsIdToDisplay={trailsIdToDisplay} />
    </div>
  );
};

export default MiniBusses;

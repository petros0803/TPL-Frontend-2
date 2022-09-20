import React from "react";
import "./busses.scss";
import TrailCard from "../Common/TrailCard/TrailCard";

const Busses = () => {
  const trailsIdToDisplay = [1, 2, 3, 4, 5, 21, 28];
  return (
    <div className="busses--container">
      <div className="busses--title">Autobuze</div>
      <TrailCard trailsIdToDisplay={trailsIdToDisplay} />
    </div>
  );
};

export default Busses;

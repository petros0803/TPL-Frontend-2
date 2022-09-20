import React, { useState, useEffect } from "react";
import "./trails.scss";
import TRAILS from "./trails-dummy-data.json";

const Trails = () => {
  const [trailId, setTrailId] = useState();
  const [trailData, setTrailData] = useState({});

  useEffect(() => {
    setTrailId(window.location.pathname.split("/")[2]);
  });

  useEffect(() => {
    setTrailData(TRAILS.trails.find((trail) => trail.id === trailId));
  }, [trailId]);

  return (
    <div className="trails--container">
      <div className="trails--title">{trailData?.title}</div>
      <div>{trailData?.stations}</div>
    </div>
  );
};

export default Trails;

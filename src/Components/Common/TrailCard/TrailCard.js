import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GET_ALL_TRAILS } from "../../../shared/trails";
import TRAILS from "../../Trails/trails-dummy-data.json";
import "./trailCard.scss";

const TrailCard = ({ trailsIdToDisplay }) => {
  const [trails, setTrails] = useState();

  const getAllTrails = async () => {
    const resp = await GET_ALL_TRAILS();

    if (resp) {
      setTrails(resp);
    }
  };

  useEffect(() => {
    getAllTrails();
  }, []);

  return (
    <div className="trails--container--card">
      {trails?.map((trail, index) =>
        trailsIdToDisplay?.map(
          (elem, id) =>
            parseInt(trail.id) === elem && (
              <div key={index} className="trails--trail--card">
                <React.Fragment key={id}>
                  <NavLink
                    to={`/trails/${trail.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="trails--trail--uno--card">
                      <div>{trail?.name}</div>
                      <div>
                        {trail?.start?.name} - {trail?.end?.name}
                      </div>
                      <div>{trail?.operatingHours}</div>
                    </div>
                  </NavLink>
                </React.Fragment>
              </div>
            )
        )
      )}
    </div>
  );
};

export default TrailCard;

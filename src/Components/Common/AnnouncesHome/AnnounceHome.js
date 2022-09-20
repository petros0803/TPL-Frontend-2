import React from "react";
import { Link } from "react-router-dom";
import "./announceHome.scss";

const AnnounceHome = ({ announce }) => {
  return (
    <div className="announceHome--container">
      <div className="title">{announce.title}</div>
      <div className="description">
        {announce.description_mini}{" "}
        <Link to={`/announces/${announce.id}`}>
          Apasa pentru a citi mai mult
        </Link>
      </div>
    </div>
  );
};

export default AnnounceHome;

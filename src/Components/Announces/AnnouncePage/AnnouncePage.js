import React, { useState, useEffect } from "react";
import "./announcePage.scss";
import dummy_data from "../announces-dummy-data.json";
import { Link } from "react-router-dom";

const AnnouncePage = () => {
  const [announce, setAnnounce] = useState({});
  const announceID = window.location.pathname.split("/")[2];

  useEffect(() => {
    setAnnounce(dummy_data.announces.find((elem) => elem.id === announceID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="announce--page--container">
      <Link to="/announces">
        <button className="announce--page-back">Inapoi</button>
      </Link>
      <div className="announce--page--title">{announce.title}</div>
      <div className="announce--page--description">
        {announce.description_full}
      </div>
    </div>
  );
};

export default AnnouncePage;

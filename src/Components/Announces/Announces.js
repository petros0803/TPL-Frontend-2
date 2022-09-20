import React, { useState } from "react";
import "./announces.scss";
import dummyData from "./announces-dummy-data.json";
import AnnounceHome from "../Common/AnnouncesHome/AnnounceHome";
import { GET_ALL_ANNOUNCES } from "../../shared/announces";

const Announces = () => {
  const [announces, setAnnounces] = useState();

  const getAnnounces = async () => {
    const announces = await GET_ALL_ANNOUNCES();
    setAnnounces(announces);
  };

  useState(() => {
    getAnnounces();
  }, []);

  return (
    <div className="announces--page--container">
      <div className="announce--page--title">Anunturi</div>

      {dummyData.announces.map((elem) => (
        <AnnounceHome announce={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default Announces;

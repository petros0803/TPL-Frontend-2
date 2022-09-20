import React, { useState, useEffect } from "react";
import PersonCard from "../Common/Card/PersonCard";
import "./management.scss";
import { MANAGEMENT } from "../../Constants/management.constants";
import { GET_ALL_EMPLOYEES } from "../../shared/users";

const Management = () => {
  const [management, setManagement] = useState();

  const getAllEmp = async () => {
    const resp = await GET_ALL_EMPLOYEES();

    if (resp) {
      setManagement(resp);
    }
  };

  useEffect(() => {
    getAllEmp();
  }, []);

  return (
    <div className="management--container">
      <div className="management--title">Conducere</div>
      <div className="management--personCard">
        {management?.map((elem, index) => (
          <PersonCard
            firstName={elem.firstName}
            lastName={elem.lastName}
            title={elem.position}
            cv={elem.cv}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Management;

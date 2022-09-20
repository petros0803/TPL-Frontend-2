import React from "react";
import { NavLink } from "react-router-dom";
import "./secondMenuModal.scss";

const SecondMenuModal = ({ choices }) => {
  return (
    <div className="secondMenuModal--container">
      {choices?.map((choice, index) => (
        <NavLink to={choice.URL} key={index}>
          <div className="secondMenuModal-choice">
            <p>{choice.TEXT}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SecondMenuModal;

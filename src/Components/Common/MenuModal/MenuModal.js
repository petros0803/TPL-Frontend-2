import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menuModal.scss";
import SecondMenuModal from "./SecondMenuModal/SecondMenuModal";

const MenuModal = ({ choices }) => {
  const [menuModal, setMenuModal] = useState();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="menuModal--container">
      {choices?.map((choice, index) => (
        <div key={index}>
          <div
            className="menuModal-choice"
            onMouseEnter={() => setMenuModal(choice)}
            onMouseLeave={() => setMenuModal(choice)}
          >
            {choice.TEXT === "Deconectare" ? (
              <p onClick={() => logout()}>{choice.TEXT}</p>
            ) : choice.URL ? (
              <NavLink to={choice.URL} className="navlink-item">
                <p>{choice.TEXT}</p>
              </NavLink>
            ) : (
              <p>{choice.TEXT}</p>
            )}
          </div>
          <div>
            {menuModal && menuModal === choice && choice.MORE_CHOICES && (
              <SecondMenuModal choices={choice.MORE_CHOICES} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuModal;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAVBAR, CHOICES } from "../../../Constants/navbar.constants";
import MenuModal from "../MenuModal/MenuModal";
import "./navbar.scss";

const Navbar = () => {
  const [isMenuModal, setIsMenuModal] = useState();
  return (
    <div className="navbar--container">
      {Object.keys(NAVBAR).map((elem, index) => (
        <React.Fragment key={index}>
          {elem !== "LOGO" ? (
            <div
              onMouseEnter={() => setIsMenuModal(elem)}
              onMouseLeave={() => setIsMenuModal()}
            >
              {!NAVBAR[elem].hasMore ? (
                <NavLink
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                  to={NAVBAR[elem].URL}
                >
                  {NAVBAR[elem].TEXT}
                </NavLink>
              ) : (
                <button>{NAVBAR[elem].TEXT}</button>
              )}
              {isMenuModal &&
                (NAVBAR[elem].hasMore && elem === isMenuModal ? (
                  <MenuModal choices={CHOICES[elem]} />
                ) : (
                  ""
                ))}
            </div>
          ) : (
            <NavLink to={NAVBAR[elem].URL}>
              <img src={NAVBAR[elem].TEXT} alt="Logo" />
            </NavLink>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navbar;

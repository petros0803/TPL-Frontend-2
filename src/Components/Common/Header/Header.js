import React from "react";
import "./header.scss";
import SEARCH from "../../../Assets/Icons/search.svg";
import ROMANIA_FLAG from "../../../Assets/Icons/romaniaFlag.svg";
import UK_FLAG from "../../../Assets/Icons/ukFlag.svg";

const Header = () => {
  return (
    <div className="header--container">
      <div className="header--input">
        <input type="text" />
        <img src={SEARCH} alt="Search" />
      </div>
      <div className="buttons--container">
        <img src={ROMANIA_FLAG} alt="romanian" className="selected-flag" />
        <img src={UK_FLAG} alt="english" className="not-selected-flag" />
      </div>
    </div>
  );
};

export default Header;

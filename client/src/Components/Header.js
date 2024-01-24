import React from "react";
import BlueLogo from "../images/OLX_New_Logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import RoomIcon from "@mui/icons-material/Room";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div className="mainContainerNavbar">
      <img src={BlueLogo} alt="Olx Logo" className="OlxBlueLogo" />
      <div className="SelectCountry">
        <div className="select">
          <p id="text">Select Your Country</p>
          <KeyboardArrowDownIcon />
        </div>
        <ul className="OptionBox">
          <li className="Option">
            <RoomIcon />
            <p>Pakistan</p>
          </li>
          <li className="Option">
            <RoomIcon />
            <p>USA</p>
          </li>
          <li className="Option">
            <RoomIcon />
            <p>India</p>
          </li>
          <li className="Option">
            <RoomIcon />
            <p>China</p>
          </li>
          <li className="Option">
            <RoomIcon />
            <p>Africa</p>
          </li>
        </ul>
      </div>
      <div className="SerarchBoxContainer">
        <input
          className="search"
          placeholder="Find Cars, Mobile Phones and more..."
        ></input>
        <div className="search-icon">
          <SearchSharpIcon fontSize="large" />
        </div>
      </div>
      <NavLink to="/LoginPage">
        <p className="NavLogin">Login</p>
      </NavLink>
      <NavLink to="/AddAd">
      <button className="NavSell">
        <AddSharpIcon fontSize="small" /> SELL
      </button>
      </NavLink>
    </div>
  );
};

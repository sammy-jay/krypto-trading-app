import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiPowerOff } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
const NavBar = ({ location }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);

  //   if (!user) navigate("/auth");

  return (
    <div className="navbar">
      <div>
        <BiMenuAltLeft fontSize="25px" />
        <h2>{location}</h2>
      </div>

      <div>
        <div>
          <div className="searchbox">
            <AiOutlineSearch fontSize="17px" />
            <input type="text" placeholder="find something..." />
          </div>
          <IoIosNotificationsOutline fontSize="25px" />
        </div>
        <div>
          <div className="details">
            <h5>{user?.fullname}</h5>
            <p>{user?.email}</p>
          </div>
          <AiOutlineUser fontSize="25px" />
          <div className="power">
            <BiPowerOff fontSize="35px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

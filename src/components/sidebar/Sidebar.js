import React from "react";
import "./sidebar.css";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Hotel</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <Link to="/" state={{ textDecoration: "none" }}>
            <HomeOutlinedIcon className="home-icon"/>
              <span> HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/rooms" state={{ textDecoration: "none" }}>
              <BedOutlinedIcon className="home-icon" />
              <span> Rooms</span>
            </Link>
          </li>
          <li>
            <Link to="/rezerv" state={{ textDecoration: "none" }}>
            <MenuBookOutlinedIcon className="home-icon"/>
              <span> Rezervation</span>
            </Link>
          </li>
          <li>
            <Link to="/gests" state={{ textDecoration: "none" }}>
            <FaceOutlinedIcon className="home-icon"/>
              <span> Gests</span>
            </Link>
          </li>
          <li>
          <Link to="/accounting" state={{ textDecoration: "none" }}>
          <CalculateOutlinedIcon className="home-icon" />
              <span> Accounting</span>
            </Link>
          </li>
          <li>
          <Link to="/personals" state={{ textDecoration: "none" }}>
            <BadgeOutlinedIcon className="home-icon" />
              <span> Personals</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div>
          <LightModeOutlinedIcon className="light" />
        </div>
        <div>
          <Brightness3OutlinedIcon className="dark" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

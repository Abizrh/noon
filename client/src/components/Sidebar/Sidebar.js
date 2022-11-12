import React from "react";
import "./Sidebar.css";
import HomeMaxIcon from "@mui/icons-material/HomeMax";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import QueueIcon from "@mui/icons-material/Queue";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import SideItem from "../SideItem/SideItem";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";


export const Sidebar = () => {
    const [show, setShow] = React.useState(false);

    return (
      <>
        <div className={show ? "sidebar side__show" : "sidebar"}>
          <Link to="/">
            {" "}
            <div className="logo">
              <img
                src="https://images.vexels.com/media/users/3/229320/isolated/preview/3dbf158d77c22e31cee5eafbdcf5ce0f-square-gradient-logo.png"
                alt="logo"
              />
              <h3>Noon</h3>
            </div>
          </Link>
          <div className="side__box">
            <div className="box__one">
              <span className="heading">Menu</span>
              <SideItem Icon={HomeMaxIcon} Name="Home" active link="/" />
              <SideItem Icon={SearchIcon} Name="Search" link="/search" />
              <SideItem
                Icon={FavoriteBorderIcon}
                Name="Favorite"
                link="/favorite"
              />
              <SideItem Icon={AccessTimeIcon} Name="Reminder" link="/reminder" />
            </div>
            <div className="box__two">
              <span className="heading">Others</span>
              <SideItem Icon={QueueIcon} Name="Playlist" link="/playlist" />
              <SideItem Icon={PlayCircleOutlineIcon} Name="Live" link="/live" />
              <SideItem Icon={SettingsIcon} Name="Setting" link="/setting" />
              <SideItem Icon={CloseIcon} close />
            </div>
          </div>
          <div className="menu__icon" onClick={() => setShow(!show)}>
            <MenuIcon />
          </div>
        </div>
        <div className={show ? 'layer layer__show': 'layer'} onClick={() => setShow(false)}></div>
      </>
    );
}

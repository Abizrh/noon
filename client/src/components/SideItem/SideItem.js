import React from "react";
import "./SideItem.css";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

function SideItem({ Icon, Name, link, close }) {
  const favorites = useSelector((state) => state.watchList);
  const buttonHandler = ({ isActive }) => {
    return {
      background: isActive ? "var(--five-color)" : "",
      color: isActive ? "#fff" : "gray",
      borderLeft: isActive ? "1px solid var(--second-color)" : "",
    };
  };

  return (
    <>
      <NavLink
        to={link ? link : "/"}
        style={buttonHandler}
        className={close ? "close sideitem" : "sideitem"}
      >
        {Name === "Favorite" ? (
          <Badge color="secondary" badgeContent={favorites.watchList.length}>
            <Icon className="icon" />
          </Badge>
        ) : (
          <Icon className="icon" />
        )}

        <span>{Name}</span>
      </NavLink>
    </>
  );
}

export default SideItem;

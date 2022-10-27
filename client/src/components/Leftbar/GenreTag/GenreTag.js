import React from "react";
import "./GenreTag.css";
import { Tag } from "../Tag/Tag";
// import Tag from '../Tag/Tag'

export const Leftbar = () => {
  return (
    <>
      <div className="widgets">
        <div className="popular__box">
          <div className="heading">Genre</div>
        </div>
        <div className="tag__box">
          <Tag tag="All" active />
          <Tag tag="Action" id={28} />
          <Tag tag="Horror" id={27} />
          <Tag tag="Romance" id={10749} />
          <Tag tag="Comedy" id={35} />
          <Tag tag="Thriller" id={53} />
          <Tag tag="Mystery" id={9648} />
          <Tag tag="Adventure" id={12} />
          <Tag tag="Animation" id={16} />
          <Tag tag="Crime"  id={80} />
          <Tag tag="Documentary" id={99} />
          <Tag tag="Music" id={10402} />
          <Tag tag="Sci-Fi" id={878} />
          <Tag tag="Drama" id={18} />
          <Tag tag="Family" id={10751} />
          <Tag tag="Fantasy" id={14} />
          <Tag tag="History" id={36} />
          <Tag tag="Tv Movie"id={10770} />
          <Tag tag="War" id={10752} />
          <Tag tag="Western" id={37} />
        </div>
      </div>
    </>
  );
};

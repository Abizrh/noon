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
          <Tag tag="Action" />
          <Tag tag="Horror" />
          <Tag tag="Romance" />
          <Tag tag="Comedy" />
          <Tag tag="Thriller" />
          <Tag tag="Mystery" />
          <Tag tag="Adventure" />
          <Tag tag="Animation" />
          <Tag tag="Crime" />
          <Tag tag="Documentary" />
          <Tag tag="Music" />
          <Tag tag="Sci-Fi" />
          <Tag tag="Drama" />
          <Tag tag="Family" />
          <Tag tag="Fantasy" />
          <Tag tag="History" />
          <Tag tag="Tv Movie" />
          <Tag tag="War" />
          <Tag tag="Western" />
        </div>
      </div>
    </>
  );
};

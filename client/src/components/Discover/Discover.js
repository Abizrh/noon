import React from "react";
import './Discover.css'

export const Discover = ({ discover }) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const trunc = (str, num) =>
    str?.length > num ? str.substr(0, num - 1) + "..." : str;
  const year = new Date(discover.release_date);
  return (
    <>
      <div className="discovers">
        <div className="discover__img">
          <img src={`${base_url}${discover.backdrop_path}`} alt={discover.title} />
        </div>
        <div className="discover__content">
          <div className="discover__left">
            <h3>
              {discover.title} - <span>( {year.getFullYear()} )</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

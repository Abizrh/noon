import React from "react";
import { Link } from "react-router-dom";
import './Discover.css'
import StarIcon from "@mui/icons-material/Star";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


export const Discover = ({ discover, type }) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const trunc = (str, num) =>
    str?.length > num ? str.substr(0, num - 1) + "..." : str;
  const year = new Date(discover.release_date);
  return (
    <>
      <div className="discovers">
        <div className="discover__img">
          {/* <img src={`${base_url}${discover.backdrop_path}`} alt={discover.title} /> */}
          <LazyLoadImage 
           src={`${base_url}${discover.backdrop_path}`} alt={discover.title}
           effect="blur"
           />
        </div>
        <div className="discover__content">
          <div className="discover__left">
            <h3>
              {discover.title} - <span>( {year.getFullYear()} )</span>
            </h3>
            <div className="button__box">
                <Link to={`${type}/${discover.id}`}><button className="btn1">Play</button></Link>
                <button className="btn2">My List</button>
            </div>
            <p>{trunc(discover.overview, 120)}</p>
          </div>
          <div className="right__discover">
            <StarIcon />
            <span>{discover.rate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

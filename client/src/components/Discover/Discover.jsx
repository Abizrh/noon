import React from "react";
import { Link } from "react-router-dom";
import './Discover.css'
import StarIcon from "@mui/icons-material/Star";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { trunc } from "../../helpers/helpers";
import { BASE_URL } from "../../constants/constant";


export const Discover = ({ discover, type }) => {

  const year = new Date(discover.release_date);
  return (
    <>
      <div className="discovers">
        <div className="discover__img">
          <LazyLoadImage 
           src={`${BASE_URL}${discover.backdrop_path}`} alt={discover.title}
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

import React from "react";
import { Link } from "react-router-dom";
import "./AllMovies.css";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BASE_URL } from "../../constants/constant";


const AllMovies = ({
  id,
  img,
  title,
  type,
  release_date,
  image,
  rate,
  grid,
  genre,
}) => {
  return (
    <>
      <article className="card">
        <Link  to={`/${type}/${id}`}>
          <picture class="thumbnail">
            <LazyLoadImage
              src={image ? image : `${BASE_URL}${img}`}
              alt={title}
              effect="blur"
            />
          </picture>
          <div class="card-content">
            {/* <h2>Vacation Image 01</h2>
            <p>
              TUX re-inventing the wheel, and move the needle. Feature creep
              dogpile that but diversify kpis but market-facing.
            </p> */}
          </div>
        </Link>
      </article>
    </>
  );
};

export default AllMovies;

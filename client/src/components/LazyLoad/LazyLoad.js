import React from 'react'
import './LazyLoad.css'

export const LazyLoad = ({grid}) => {
  return (
    <>
      <div className={grid ? "moviesRowLoad gridMoviesLoad" : "moviesRowLoad"}>
        {/* <Link to={`/${type}${id}`}>
        </Link> */}
        <div className='img__'>gagag</div>
        <div className="favLoad">
          {/* {icon}  */}
        </div>

        <div className={grid ? "movies__infoLoad innLoad" : "movies_infoLoad"}>
          <div className="movie__nameLoad">
            <h3></h3>
          </div>
          <div className="movie__otherLoad">
            <p>
              {/* {year?.getFullYear()} */}
              <span>
                {/* {rate} */}
                {/* <Star /> */}
              </span>
            </p>
            {/* <p>{type}</p> */}
          </div>
        </div>
      </div>
      ;
    </>
  )
}

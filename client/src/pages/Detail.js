import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Detail = () => {
    const navigate = useNavigate()
  
    const backHandler = () => {
      if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
      } else {
        navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
      }
    };
    return (
        <>
          <div
            className="movieDashboard"
            style={{
              backgroundSize: "cover",
            //   backgroundImage: `url(${base_url}${data?.backdrop_path})`,
              backgroundPosition: "center center",
            }}
          >
         
          </div>
          <div className="layer"></div>
          <div className="back__icon" onClick={() => backHandler()}>
            <span>Back</span>
          </div>
    
    
    
          <div className="movie__content">
            <div className="vote">
              <span>dfadfdfad%</span>
            </div>
            <div className="name">
              <h3>dfadfdsf</h3>
              <p>
                {/* {truncate(data?.overview, string)}{" "} */}
                {/* <span onClick={() => stringHandler()}>{show}</span> */}
              </p>
            </div>
            <div className="button__box">
              <button>
                {/* <PlayArrowIcon /> Play */}
              </button>
              <button>
                {/* <LanguageIcon /> */}
              </button>
            </div>
          </div>
        </>
      );
}

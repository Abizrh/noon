import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { LazyLoad } from "../components/LazyLoad/LazyLoad";
import { fetchDetail } from "../store/actions/action-movie";

export const Detail = () => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type, id } = useParams();
  const info = { type, id };

  const movie = useSelector((state) => state.movie);

  const backHandler = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
    }
  };

  useEffect(() => {
    dispatch(fetchDetail(info));
  }, []);

  console.log(movie?.detail);
  return (
    <>
      <div
        className="detail"
        style={{
          backgroundSize: "cover",
            backgroundImage: `url(${base_url}${movie?.detail.backdrop_path || movie?.detail.poster_path})`,
          backgroundPosition: "center center",
        }}
      ></div>
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
          <button>{/* <PlayArrowIcon /> Play */}</button>
          <button>{/* <LanguageIcon /> */}</button>
        </div>
      </div>
    </>
  );
};

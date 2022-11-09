import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetail, fetchTrailer } from "../store/actions/action-movie";
import { PlayArrow, Language } from "@mui/icons-material";
import { BASE_URL } from "../constants/constant";
import { trunc } from "../helpers/helpers";
import Trailer from "../components/Trailer/Trailer";

export const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type, id } = useParams();
  const info = { type, id };
  const [string, setString] = useState(150);
  const [show, setShow] = useState("More");
  const movie = useSelector((state) => state.movie);

  const stringHandler = () => {
    setString(1500);
    setShow("");
  };

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

  useEffect(() => {
    dispatch(fetchTrailer(info))
  }, [])


  // console.log(movie.trailers?.results[0].key)

  return (
    <>
      <div
        className="detail"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${BASE_URL}${
            movie?.detail.backdrop_path || movie?.detail.poster_path
          })`,
          backgroundPosition: "center center",
          boxShadow: "#000 0 2px 10px",
          backgroundColor: "rgb(59, 59, 59)",
        }}
      ></div>
      <div className="layer"></div>
      <div className="back__icon" onClick={() => backHandler()}>
        <span>Back</span>
      </div>

      <div className="movie__content">
        <div className="vote">
          <span>{movie?.detail.vote_average * 10}%</span>
        </div>
        <div className="name">
          <h3>
            {movie?.detail.name ||
              movie?.detail.original_name ||
              movie?.detail.original_title}
          </h3>

          <p>
            {trunc(movie?.detail.overview, string)}{" "}
            <span onClick={() => stringHandler()}>{show}</span>
          </p>
        </div>
        <div className="button__box">
          <Trailer embedId={movie.trailers?.results[0].key} name={movie.trailers?.results[0].name}  />
          <button>
            <Language />
          </button>
        </div>
      </div>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Discover } from "../components/Discover/Discover";
import { LazyLoad, Spinner } from "../components/LazyLoad/Spinner";
import { MovieRow } from "../components/MovieRow/MovieRow";
import {
  fetchAllMovies,

} from "../store/actions/action-movie";
export const Favorite = () => {  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState("All");
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <>
    <div>Favorite</div>
     
    </>
  )
}

import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MovieRow } from "../components/MovieRow/MovieRow";

export const Favorite = () => {

  const favorites = useSelector((state) => state.watchList);
  const page = useLocation()

  // console.log(page, 'PAGE')


  return (
    <>
      <div className="searchh">
        <div className="search__top">
          <div className="heading">Favorites</div>
        </div>
        <div className="home__box">
          {/* {loading && <h1>Loading...</h1>}
        {error && <h1>Something Went Wrong !</h1>} */}
          {favorites.watchList.length <= 0 && (
            <h2>
              Sorry we did'nt found what you looking for, make sure your search
              was right.
            </h2>
          )}
          {favorites.watchList?.map((el) => {
            return (
              <MovieRow
                grid
                key={el.id}
                id={el?.id}
                img={el?.img}
                title={el.title}
                release_date={el.release_date}
                rate={el.rate}
                genre={el.genre}
                type={el.type}
                page={page.pathname}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

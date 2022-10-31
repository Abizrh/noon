const DISCOVER = {
  adult: false,
  backdrop_path: "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
  genre_ids: (3)[(14, 35, 10751)],
  id: 642885,
  original_language: "en",
  original_title: "Hocus Pocus 2",
  overview:
    "It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.",
  popularity: 3574.158,
  poster_path: "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
  release_date: "2022-09-27",
  title: "Hocus Pocus 2",
  video: false,
  vote_average: 7.9,
  vote_count: 433,
};
const BASE_URL = "https://image.tmdb.org/t/p/original";
const POPCORN =
"https://as2.ftcdn.net/v2/jpg/02/07/53/73/1000_F_207537392_hQeHBy8BI4oFPzDmhjF94IHb1Tu8jZyG.jpg";

const API_KEY = "e41e10a70ecb26587607640ae2112868";
const API_URL = "https://api.themoviedb.org/3";

// https://imdb-api.com/API/MostPopularMovies/k_40r463mr
// https://api.themoviedb.org/3/genre/movie/list?api_key=e41e10a70ecb26587607640ae2112868&language=en-US
// https://api.themoviedb.org/3/search/keyword?query=action&api_key=e41e10a70ecb26587607640ae2112868&page=1
// /${type}/${id}?language=en-US&api_key=${API_KEY}

// filter with genre
// https://api.themoviedb.org/3/discover/movie?api_key=e41e10a70ecb26587607640ae2112868&with_genres=28

export { DISCOVER, BASE_URL, POPCORN, API_KEY, API_URL };

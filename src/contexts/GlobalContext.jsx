import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  // const apikey = import.meta.env.VITE_TMDB_API_KEY;
  const apiUrlMovie = import.meta.env.VITE_TMDB_API_URL_MOVIE;
  const apiUrlTV = import.meta.env.VITE_TMDB_API_URL_TV;

  const [moviesData, setMoviesData] = useState([]);
  const [tvData, setTvData] = useState([]);

  const fetchMovies = (query) => {
    if (!query.trim()) return;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        // Authorization: `Bearer ${apikey}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDBiMDU4Mjc0NTA0M2EwOGYxYTNjNzViNjA1MjZkZSIsIm5iZiI6MTczNDM0ODAwMC4xMDMwMDAyLCJzdWIiOiI2NzYwMGNlMDMzM2U1NzVlNGY4NTA2NjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lEqJMCx1RX8jhTzkVJbD1lxaHIauaF2lskihty33UTc`,
      },
    };

    //# MOVIES

    const urlMovie = `${apiUrlMovie}?query=${query}`;

    fetch(urlMovie, options)
      .then((res) => res.json())
      .then((data) => {
        const movies = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          language: movie.original_language,
          vote: movie.vote_average,
        }));
        setMoviesData(movies);
        console.log(movies);
      })
      .catch((err) => console.error(err));

    //# TV
    const urlTv = `${apiUrlTV}?query=${query}`;

    fetch(urlTv, options)
      .then((res) => res.json())
      .then((data) => {
        const tvShows = data.results.map((show) => ({
          id: show.id,
          title: show.name,
          original_title: show.original_name,
          language: show.original_language,
          vote: show.vote_average,
        }));
        setTvData(tvShows);
        console.log(tvShows);
      })
      .catch((err) => console.error(err));
  };

  return (
    <GlobalContext.Provider value={{ moviesData, tvData, fetchMovies }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
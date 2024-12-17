import { createContext, useState, useContext } from "react";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const apikey = import.meta.env.VITE_TMDB_API_KEY;
  const apiUrl = import.meta.env.VITE_TMDB_API_URL;

  const [moviesData, setMoviesData] = useState([]);

  const fetchMovies = (query) => {
    if (!query.trim()) return;

    const url = `${apiUrl}?query=${query}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        // Authorization: `Bearer ${apikey}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDBiMDU4Mjc0NTA0M2EwOGYxYTNjNzViNjA1MjZkZSIsIm5iZiI6MTczNDM0ODAwMC4xMDMwMDAyLCJzdWIiOiI2NzYwMGNlMDMzM2U1NzVlNGY4NTA2NjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lEqJMCx1RX8jhTzkVJbD1lxaHIauaF2lskihty33UTc`,
      },
    };

    fetch(url, options)
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
  };

  return (
    <MovieContext.Provider value={{ moviesData, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

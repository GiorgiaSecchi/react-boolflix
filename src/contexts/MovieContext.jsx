import { createContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const apikey = import.meta.env.VITE_TMDB_API_KEY;
  const apiUrl = import.meta.env.VITE_TMDB_API_URL;

  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    const url = `${apiUrl}?query=gatto`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${apikey}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        const movies = data.results.map((movie) => ({
          title: movie.title,
          original_title: movie.original_title,
          language: movie.original_language,
          vote: movie.vote_average,
        }));
        const newMoviesData = { ...moviesData, movies };
        setMoviesData(newMoviesData);
        console.log(newMoviesData);
      })
      .catch((err) => console.error(err));
  };

  return (
    <MovieContext.Provider value={moviesData}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

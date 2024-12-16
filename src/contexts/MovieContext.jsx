import { createContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const apikey = import.meta.env.TMDB_API_KEY;
  const apiUrl = import.meta.env.TMDB_API_URL;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=gatto`;
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
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

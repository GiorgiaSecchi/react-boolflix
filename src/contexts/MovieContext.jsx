import { createContext, useEffect, useState, useContext } from "react";

const MovieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const apikey = import.meta.env.VITE_TMDB_API_KEY;
  const apiUrl = import.meta.env.VITE_TMDB_API_URL;

  const [moviesData, setMoviesData] = useState([]);

  //   useEffect(() => {
  //     fetchMovies();
  //   }, []);

  const fetchMovies = (query) => {
    if (!query.trim()) return;

    const url = `${apiUrl}?query=${encodeURIComponent(query)}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apikey}`,
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

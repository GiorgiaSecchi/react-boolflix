import { useMovieContext } from "../contexts/MovieContext";

export default function MovieList() {
  const { moviesData } = useMovieContext();

  return (
    <ul className="list-group">
      {moviesData.map((movie, index) => (
        <li className="list-group-item" key={index}>
          <h3> {movie.title}</h3>
          <h4>{movie.original_title}</h4>
          <p>{movie.language}</p>
          <p>{movie.vote}</p>
        </li>
      ))}
    </ul>
  );
}

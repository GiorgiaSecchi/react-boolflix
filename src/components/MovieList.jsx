import { useMovieContext } from "../contexts/MovieContext";

export default function MovieList() {
  const { moviesData } = useMovieContext();

  return (
    <ul className="list-group">
      {moviesData.map((movie, index) => (
        <li className="list-group-item" key={index}>
          <h5>Titolo: "{movie.title}"</h5>
          <h6>Titolo originale: "{movie.original_title}"</h6>
          <p>Lingua: {movie.language}</p>
          <p>Voto: {movie.vote}</p>
        </li>
      ))}
    </ul>
  );
}

import { useGlobalContext } from "../contexts/GlobalContext";

export default function MovieList() {
  const { moviesData } = useGlobalContext();

  const formatLanguage = (language) => {
    if (language === "en") return "GB";
    if (language === "zh") return "CN";
    if (language === "ja") return "JP";

    return language.toUpperCase();
  };

  const buildPosterUrl = (poster) => {
    const imageUrl = "https://image.tmdb.org/t/p/";
    const size = "/w342";
    return imageUrl + size + poster;
  };

  return (
    <section>
      <h2 className="text-light">Film:</h2>
      <ul className="list-group">
        {moviesData.map((movie) => (
          <li className="list-group-item" key={movie.id}>
            <h5>"{movie.title}"</h5>
            <p>
              <strong>Titolo originale:</strong> {movie.original_title}
            </p>

            <p>
              <strong>Lingua:</strong> {movie.language.toUpperCase()}
            </p>

            <img
              src={`https://flagsapi.com/${formatLanguage(
                movie.language
              )}/flat/64.png`}
            ></img>
            <p>
              <strong>Voto:</strong> {movie.vote}
            </p>
            <p>
              <img src={buildPosterUrl(movie.poster_path)} alt="" />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

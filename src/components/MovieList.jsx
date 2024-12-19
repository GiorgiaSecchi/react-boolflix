import { useGlobalContext } from "../contexts/GlobalContext";
import Cards from "./Cards";

export default function MovieList() {
  const { moviesData } = useGlobalContext();

  return (
    <section className="container">
      <div className="row g-4">
        {moviesData.length === 0 ? (
          <p className="text-light text-center">Nessun film trovato.</p>
        ) : (
          <>
            <h2 className="text-light">Film:</h2>
            {moviesData.map((movie) => (
              <div className="col-6 col-md-4 col-lg-3" key={movie.id}>
                <Cards
                  title={movie.title}
                  originalTitle={movie.original_title}
                  language={movie.language}
                  vote={Math.ceil(movie.vote)}
                  image={movie.poster_path}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

// const formatLanguage = (language) => {
//   if (language === "en") return "GB";
//   if (language === "zh") return "CN";
//   if (language === "ja") return "JP";

//   return language.toUpperCase();
// };

// const buildPosterUrl = (poster) => {
//   const imageUrl = "https://image.tmdb.org/t/p/";
//   const size = "/w342";
//   return imageUrl + size + poster;
// };

{
  /* <div>
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
      </div> */
}

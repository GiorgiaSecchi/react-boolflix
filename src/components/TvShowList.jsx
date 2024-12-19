import { useGlobalContext } from "../contexts/GlobalContext";

export default function TvShowList() {
  const { tvData } = useGlobalContext();

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
    <section className="mt-5 container">
      {/* <h2 className="text-light">Serie TV:</h2> */}
      <ul className="list-group">
        {tvData.map((show) => (
          <li className="list-group-item" key={show.id}>
            <h5>"{show.name}"</h5>
            <p>
              <strong>Titolo originale:</strong> {show.original_name}
            </p>

            <p>
              <strong>Lingua:</strong> {show.language.toUpperCase()}
            </p>

            <img
              src={`https://flagsapi.com/${formatLanguage(
                show.language
              )}/flat/64.png`}
            ></img>
            <p>
              <strong>Voto:</strong> {show.vote}
            </p>
            <p>
              <img src={buildPosterUrl(show.poster_path)} alt="" />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

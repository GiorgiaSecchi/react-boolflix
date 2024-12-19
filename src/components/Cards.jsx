import React from "react";

export default function Cards({ title, originalTitle, language, vote, image }) {
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

  const placeholder =
    "https://www.altavod.com/assets/images/poster-placeholder.png";

  return (
    <>
      <div className="col">
        <div className="card">
          <img
            className="card-img"
            src={image ? buildPosterUrl(image) : placeholder}
            alt={title}
          />
          <div className="card-details">
            <h5>"{title}"</h5>
            <h6>{originalTitle}</h6>
            {/* <p>{language.toUpperCase()}</p> */}
            <img
              src={`https://flagsapi.com/${formatLanguage(
                language
              )}/flat/64.png`}
            ></img>
            <p>
              <strong>Voto: </strong>
              {vote}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

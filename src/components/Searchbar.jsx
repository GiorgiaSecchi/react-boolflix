import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const { fetchMovies } = useMovieContext();

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchMovies(query);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand">BOOLFIX</a>
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Cerca..."
            aria-label="Search"
            value={query}
            onChange={handleQuery}
          />
          <button className="btn btn-danger" type="submit">
            Cerca
          </button>
        </form>
      </div>
    </nav>
  );
}

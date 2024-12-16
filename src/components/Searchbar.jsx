import { NavLink } from "react-router-dom";

export default function Searchbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">BOOLFIX</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

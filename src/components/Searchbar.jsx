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
            placeholder="Cerca..."
            aria-label="Search"
          />
          <button className="btn btn-danger" type="submit">
            Cerca
          </button>
        </form>
      </div>
    </nav>
  );
}

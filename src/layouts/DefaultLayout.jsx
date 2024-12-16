import { Outlet } from "react-router-dom";
import Searchbar from "../components/Searchbar";

export default function DefaultLayout() {
  return (
    <div className="wrapper">
      <header>
        <Searchbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="text-bg-dark bg-gradient py-4">
        <div className="container-fluid">Footer</div>
      </footer>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";

// contexts
import { MovieContextProvider } from "./contexts/MovieContext";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

//pages
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;

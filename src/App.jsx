import { BrowserRouter, Routes, Route } from "react-router-dom";

// contexts
import { GlobalContextProvider } from "./contexts/GlobalContext";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

//pages
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="*" Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;

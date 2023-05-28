import { useContext } from "react";
import "./App.scss";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import RootLayout from "./layouts/rootLayout/RootLayout.tsx";
import Homepage from "./pages/homepage/Homepage.tsx";
import DiscoverPage from "./pages/discoverPage/DiscoverPage.tsx";
import { themeContext } from "./contexts/themeContext.tsx";
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage.tsx";
import SearchResultsPage from "./pages/searchResultsPage/SearchResultsPage.tsx";
import LoginPage from "./pages/loginPage/LoginPage.tsx";

const App = () => {
  const { theme, setTheme } = useContext(themeContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="discover" element={<DiscoverPage />} />
        <Route path="movie/:id" element={<MovieDetailsPage />} />
        <Route path="search/:searchTerm" element={<SearchResultsPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    )
  );

  return (
    <div className={`App ${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

//PAGINATION
// FILTER FUNCTIONALITY ON SUBPAGES
// PUT EVENT HANDLERS IN A FILE
// INSTALL REACT SKELETON AND CREATE SKELETON LOADERS

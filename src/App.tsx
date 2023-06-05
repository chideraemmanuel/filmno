import { useContext } from "react";
import "./App.scss";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/rootLayout/RootLayout.tsx";
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage.tsx";
import SearchResultsPage from "./pages/searchResultsPage/SearchResultsPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";
import Homepage from "./pages/homepage/Homepage.tsx";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { themeContext } from "./contexts/themeContext.tsx";

const App = () => {
  const { theme } = useContext(themeContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route
          path="movie/:id"
          element={<MovieDetailsPage />}
          errorElement={<NotFoundPage />}
        />
        <Route path="search/:searchTerm" element={<SearchResultsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <div className={`App ${theme}`}>
      <SkeletonTheme
        baseColor={theme === "light" ? "#c6c6c6" : "#787878"}
        highlightColor={theme === "light" ? "#dbdbdb" : "#464646"}
      >
        <RouterProvider router={router} />
      </SkeletonTheme>
    </div>
  );
};

export default App;

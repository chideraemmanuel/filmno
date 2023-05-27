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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="discover" element={<DiscoverPage />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

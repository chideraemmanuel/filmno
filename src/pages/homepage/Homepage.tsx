import { useState } from "react";
import CardGrid from "../../containers/cardGrid/CardGrid";
import PageHeader from "../components/pageHeader/PageHeader";
import SubpageSkeleton from "../components/skeletons/subpageSkeleton/SubpageSkeleton";
import "./Homepage.scss";
import FetchErrorPage from "../fetchErrorPage/FetchErrorPage";
import Pagination from "../components/pagination/Pagination";
import useFetchTrendingMovies from "../../hooks/useFetchTrendingMovies";

const Homepage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError } = useFetchTrendingMovies(pageNumber);

  return (
    <div className="homepage">
      {isLoading && <SubpageSkeleton />}
      {isError && <FetchErrorPage />}
      {data && <PageHeader pageHeader="Discover trending movies" />}
      {data && <CardGrid data={data.data.results} />}

      <Pagination />
      <button onClick={() => setPageNumber(pageNumber + 1)}>next page</button>
    </div>
  );
};

export default Homepage;

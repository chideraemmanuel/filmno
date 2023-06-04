import { useState, useEffect, useContext } from "react";
import CardGrid from "../../containers/cardGrid/CardGrid";
import PageHeader from "../components/pageHeader/PageHeader";
import SubpageSkeleton from "../components/skeletons/subpageSkeleton/SubpageSkeleton";
import "./Homepage.scss";
import FetchErrorPage from "../fetchErrorPage/FetchErrorPage";
import Pagination from "../components/pagination/Pagination";
import useFetchTrendingMovies from "../../hooks/useFetchTrendingMovies";
import axios from "axios";
import { useQuery } from "react-query";
import { filterAndPaginationContext } from "../../contexts/filterAndPaginationContext";

const Homepage = () => {
  const { pageNumber } = useContext(filterAndPaginationContext);
  const { genreId } = useContext(filterAndPaginationContext);
  const { data, isLoading, isError } = useFetchTrendingMovies(
    pageNumber,
    genreId
  );

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, [pageNumber, genreId]);

  return (
    <div className="homepage">
      {isLoading && <SubpageSkeleton />}

      {isError && <FetchErrorPage />}

      {data && (
        <PageHeader pageHeader="Discover trending movies" filter={true} />
      )}
      {data && <CardGrid data={data.data.results} />}
      {data && <Pagination />}
    </div>
  );
};

export default Homepage;

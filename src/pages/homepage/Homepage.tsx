import { useState } from "react";
import CardGrid from "../../containers/cardGrid/CardGrid";
import PageHeader from "../components/pageHeader/PageHeader";
import SubpageSkeleton from "../components/skeletons/subpageSkeleton/SubpageSkeleton";
import "./Homepage.scss";
import FetchErrorPage from "../fetchErrorPage/FetchErrorPage";
import Pagination from "../components/pagination/Pagination";
import useFetchTrendingMovies from "../../hooks/useFetchTrendingMovies";
import axios from "axios";
import { useQuery } from "react-query";

const Homepage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  // console.log(pageNumber);
  const { data, isLoading, isError } = useFetchTrendingMovies(pageNumber);

  // const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

  // const fetchTrendingMovies = () => {
  //   return axios.get("https://api.themoviedb.org/3/discover/movie", {
  //     params: {
  //       include_adult: "false",
  //       include_video: "false",
  //       language: "en-US",
  //       page: `${pageNumber}`,
  //       sort_by: "popularity.desc",
  //     },
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  // };

  // const { data, isLoading, isFetching, error, isError } = useQuery(
  //   ["trending movies"],
  //   fetchTrendingMovies,
  //   {
  //     retry: false,
  //   }
  // );

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

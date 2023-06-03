import axios from "axios";
import { useQuery } from "react-query";

const useFetchTrendingMovies = (page: number) => {
  const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

  const fetchTrendingMovies = () => {
    return axios.get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: `${page}`,
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const { data, isLoading, isFetching, error, isError } = useQuery(
    ["trending movies"],
    fetchTrendingMovies
  );

  return { data, isLoading, isFetching, error, isError };
};

export default useFetchTrendingMovies;

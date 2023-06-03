import { useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { filterAndPaginationContext } from "../contexts/filterAndPaginationContext";

// const { genreId } = useContext(filterAndPaginationContext);

const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

const fetchTrendingMovies = ({ queryKey }: { queryKey: any[] }) => {
  const page = queryKey[1];
  const genreId = queryKey[2];
  // console.log(queryKey);i
  return axios.get("https://api.themoviedb.org/3/discover/movie", {
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: `${page}`,
      sort_by: "popularity.desc",
      with_genres: genreId,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const useFetchTrendingMovies = (page: number, genreId: number) => {
  // const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

  // const fetchTrendingMovies = (pageN: number) => {
  //   return axios.get("https://api.themoviedb.org/3/discover/movie", {
  //     params: {
  //       include_adult: "false",
  //       include_video: "false",
  //       language: "en-US",
  //       page: `${pageN}`,
  //       sort_by: "popularity.desc",
  //     },
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  // };

  const { data, isLoading, isFetching, error, isError } = useQuery(
    ["trending movies", page, genreId],
    fetchTrendingMovies,
    // () => fetchTrendingMovies(page),
    {
      retry: false,
    }
  );

  return { data, isLoading, isFetching, error, isError };
};

export default useFetchTrendingMovies;

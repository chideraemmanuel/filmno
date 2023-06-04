import axios from "axios";
import { useQuery } from "react-query";

const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

const fetchTrendingMovies = ({ queryKey }: { queryKey: any[] }) => {
  const page = queryKey[1];
  const genreId = queryKey[2];
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
  const { data, isLoading, isFetching, error, isError } = useQuery(
    ["trending movies", page, genreId],
    fetchTrendingMovies,
    {
      retry: false,
    }
  );

  return { data, isLoading, isFetching, error, isError };
};

export default useFetchTrendingMovies;

import axios from "axios";
import { useQuery } from "react-query";

const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

const fetchMovieDetails = ({ queryKey }: { queryKey: any[] }) => {
  const movieId = queryKey[1];

  return axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
    params: {
      language: "en-US",
      append_to_response: "video",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const useFetchMovieDetails = (id: any) => {
  const { data, isLoading, error } = useQuery(
    ["movie details", id],
    fetchMovieDetails
  );

  if (error) {
    throw Error("Page not found");
  }

  return { data, isLoading, error };
};

export default useFetchMovieDetails;

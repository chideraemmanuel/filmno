import axios from "axios";
import { useQuery } from "react-query";

const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

const fetchSimilarMovies = ({ queryKey }: { queryKey: any[] }) => {
  const movieId = queryKey[1];
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
    {
      params: {
        language: "en-US",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

const useFetchSimilarMovies = (movieId: any) => {
  const { data } = useQuery(["similar movies", movieId], fetchSimilarMovies);

  return { data };
};

export default useFetchSimilarMovies;

import axios from "axios";
import { useQuery } from "react-query";

const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

const fetchRelatedMovies = ({ queryKey }: { queryKey: any[] }) => {
  const movieId = queryKey[1];

  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
    {
      params: {
        language: "en-US",
        // append_to_response: "video",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

const useFetchRelatedMovies = (id: any) => {
  const { data } = useQuery(["related movies", id], fetchRelatedMovies);

  return { data };
};

export default useFetchRelatedMovies;

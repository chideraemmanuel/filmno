import axios from "axios";
import { useQuery } from "react-query";

const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

const fetchGenres = () => {
  return axios.get("https://api.themoviedb.org/3/genre/movie/list", {
    params: {
      language: "en-US",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const useFetchGenres = () => {
  const { data } = useQuery(["genres"], fetchGenres);

  return { data };
};

export default useFetchGenres;

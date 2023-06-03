import axios from "axios";

const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

const useFetchTopRatedMovies = () => {
  const fetchTopRatedMovies = () => {
    return axios.get("", {
      params: {},
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
};

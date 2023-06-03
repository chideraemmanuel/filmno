import axios from "axios";
import { useQuery } from "react-query";

// DID NOT USE OTHER CUSTOM HOOKS TO FETCH HOMEPAGE DATA SO AS TO BE SURE ALL DIFFERENT HOMEPAGE DATA (AXIOS.ALL) WILL BE FETCHED OR JUST ONE ERROR WILL BE THROWN

const useFetchHomepageData = () => {
  const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

  const fetchHomepageData = () => {
    return axios.all([
      // FETCH TRENDING MOVIES
      axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          include_adult: "false",
          include_video: "false",
          language: "en-US",
          page: "1",
          sort_by: "popularity.desc",
          // PROBABLY ADD LIMIT
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      // FETCH TOP RATED MOVIES
      axios.get("https://api.themoviedb.org/3/movie/top_rated", {
        // params: {
        //   include_adult: "false",
        //   include_video: "false",
        //   language: "en-US",
        //   page: "1",
        //   sort_by: "popularity.desc",
        //   // PROBABLY ADD LIMIT
        // },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      // FETCH POPULAR MOVIES
      axios.get("https://api.themoviedb.org/3/movie/popular", {
        // params: {
        //   include_adult: "false",
        //   include_video: "false",
        //   language: "en-US",
        //   page: "1",
        //   sort_by: "popularity.desc",
        //   // PROBABLY ADD LIMIT
        // },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    ]);
  };

  const { data, isLoading, isFetching, error, status, isError } = useQuery(
    ["homepage data"],
    fetchHomepageData
  );

  return { data, isLoading, isFetching, error, status, isError };
};

export default useFetchHomepageData;

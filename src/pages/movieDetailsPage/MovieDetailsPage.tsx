import { useParams } from "react-router-dom";
import "./MovieDetailsPage.scss";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Carousel from "../../components/carousel/Carousel";
import MovieDetailsPageSkeleton from "../components/skeletons/movieDetailsPageSkeleton/MovieDetailsPageSkeleton";
import axios from "axios";
import { useQuery } from "react-query";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_TOKEN;

  const fetchMovieDetails = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
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

  const { data, isLoading, error } = useQuery(
    ["movie details"],
    fetchMovieDetails
  );

  const fetchRelatedMovies = () => {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations`,
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

  const { data: relatedMovies } = useQuery(
    ["related movies"],
    fetchRelatedMovies
  );

  return (
    <div className="movie-details-page">
      {/* <MovieDetailsPageSkeleton /> */}
      {data && <MovieDetails data={data.data} />}
      {relatedMovies && (
        <Carousel
          data={relatedMovies.data.results}
          carouselHeader="You might also like:"
        />
      )}
    </div>
  );
};

export default MovieDetailsPage;

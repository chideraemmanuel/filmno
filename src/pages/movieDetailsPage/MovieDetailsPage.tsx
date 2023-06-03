import { useParams } from "react-router-dom";
import "./MovieDetailsPage.scss";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Carousel from "../../components/carousel/Carousel";
import MovieDetailsPageSkeleton from "../components/skeletons/movieDetailsPageSkeleton/MovieDetailsPageSkeleton";
import axios from "axios";
import { useQuery } from "react-query";
import useFetchMovieDetails from "../../hooks/useFetchMovieDetails";
import useFetchRelatedMovies from "../../hooks/useFetchRelatedMovies";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const { data: movieDetails, isLoading, error } = useFetchMovieDetails(id);
  const { data: relatedMovies } = useFetchRelatedMovies(id);

  return (
    <div className="movie-details-page">
      {isLoading && <MovieDetailsPageSkeleton />}
      {movieDetails && <MovieDetails data={movieDetails.data} />}
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

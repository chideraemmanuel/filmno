import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailsPage.scss";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Carousel from "../../components/carousel/Carousel";
import MovieDetailsPageSkeleton from "../components/skeletons/movieDetailsPageSkeleton/MovieDetailsPageSkeleton";
import axios from "axios";
import { useQuery } from "react-query";
import useFetchMovieDetails from "../../hooks/useFetchMovieDetails";
import useFetchRelatedMovies from "../../hooks/useFetchRelatedMovies";
import useFetchSimilarMovies from "../../hooks/useFetchSimilarMovies";
import PageHeader from "../components/pageHeader/PageHeader";
import CardGrid from "../../containers/cardGrid/CardGrid";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const { data: movieDetails, isLoading, error } = useFetchMovieDetails(id);
  const { data: relatedMovies } = useFetchRelatedMovies(id);
  const { data: similarMovies } = useFetchSimilarMovies(id);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, [id]);

  return (
    <div className="movie-details-page">
      {isLoading && <MovieDetailsPageSkeleton />}
      {movieDetails && <MovieDetails data={movieDetails.data} />}
      {relatedMovies?.data.results.length > 0 && (
        <div className="movie-details-page__related">
          <PageHeader pageHeader="You might also like:" filter={false} />
          <CardGrid data={relatedMovies?.data.results} />
        </div>
      )}

      {relatedMovies?.data.results.length === 0 && similarMovies && (
        <div className="movie-details-page__similar">
          <PageHeader pageHeader="You might also like:" filter={false} />
          <CardGrid data={similarMovies?.data.results} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;

// SHOW EITHER RECOMMENDATIONS OR SIMILAR MOVIES BASED ON LENGTH OF DATA RETURNED

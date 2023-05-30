import { useParams } from "react-router-dom";
import "./MovieDetailsPage.scss";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Carousel from "../../components/carousel/Carousel";
import MovieDetailsPageSkeleton from "../components/skeletons/movieDetailsPageSkeleton/MovieDetailsPageSkeleton";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="movie-details-page">
      {/* <MovieDetailsPageSkeleton /> */}
      <MovieDetails />
      <Carousel data={data} carouselHeader="You might also like:" />
    </div>
  );
};

export default MovieDetailsPage;

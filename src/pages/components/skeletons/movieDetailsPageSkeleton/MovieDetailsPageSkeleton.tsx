import "./MovieDetailsPageSkeleton.scss";
import CarouselHeaderSkeleton from "../components/carouselHeaderSkeleton/CarouselHeaderSkeleton";
import MovieCardSkeleton from "../components/movieCardSkeleton/MovieCardSkeleton";
import Skeleton from "react-loading-skeleton";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const MovieDetailsPageSkeleton = () => {
  return (
    <div className="movie-details-page-skeleton">
      <div className="movie-details-page-skeleton__info">
        <MovieCardSkeleton />
        <div className="movie-details-page-skeleton__info--text">
          <h2>
            <Skeleton />
          </h2>
          <br />
          <div className="">
            <Skeleton count={5} />
          </div>
          <br />
          {/* <div className="ac">
            <Skeleton count={4} circle width={50} height={50} />
          </div> */}
          <Skeleton width={150} height={40} />
        </div>
      </div>

      <br />
      <br />

      <CarouselHeaderSkeleton />
      <br />
      <div className="movie-details-page-skeleton__carousel">
        {numbers.map((_number, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetailsPageSkeleton;

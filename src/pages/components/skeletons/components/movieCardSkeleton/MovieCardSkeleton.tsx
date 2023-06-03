import "./MovieCardSkeleton.scss";
import Skeleton from "react-loading-skeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="movie-card-skeleton">
      <Skeleton height={"100%"} />
    </div>
  );
};

export default MovieCardSkeleton;

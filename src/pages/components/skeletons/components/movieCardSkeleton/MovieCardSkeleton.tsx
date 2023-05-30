import React from "react";
import Skeleton from "react-loading-skeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="movie-card-skeleton">
      <Skeleton height={200} />
    </div>
  );
};

export default MovieCardSkeleton;

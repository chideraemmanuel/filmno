import "./SubpageSkeleton.scss";
import CarouselHeaderSkeleton from "../components/carouselHeaderSkeleton/CarouselHeaderSkeleton";
import MovieCardSkeleton from "../components/movieCardSkeleton/MovieCardSkeleton";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const SubpageSkeleton = () => {
  return (
    <div className="subpage-skeleton">
      <CarouselHeaderSkeleton />
      <br />
      <div className="subpage-skeleton__carousel">
        {numbers.map((_number, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default SubpageSkeleton;

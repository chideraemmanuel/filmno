import "./HomepageSkeleton.scss";
import CarouselHeaderSkeleton from "../components/carouselHeaderSkeleton/CarouselHeaderSkeleton";
import MovieCardSkeleton from "../components/movieCardSkeleton/MovieCardSkeleton";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const HomePageSkeleton = () => {
  return (
    <div className="homepage-skeleton">
      <CarouselHeaderSkeleton link={true} />
      <br />
      <MovieCardSkeleton />
      <br />
      <CarouselHeaderSkeleton link={true} />
      <br />
      <div className="homepage-skeleton__carousel">
        {numbers.map((_number) => (
          <MovieCardSkeleton />
        ))}
      </div>
      {/* <br />
      <CarouselHeaderSkeleton />
      <div className="homepage-skeleton__carousel">
        {numbers.map((_number) => (
          <MovieCardSkeleton />
        ))}
      </div> */}
    </div>
  );
};

export default HomePageSkeleton;

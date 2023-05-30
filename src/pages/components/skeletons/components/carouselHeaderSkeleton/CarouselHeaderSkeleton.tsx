import "./CarouselHeader.scss";
import Skeleton from "react-loading-skeleton";

type headerSkeletonProp = {
  link?: boolean;
};

const CarouselHeaderSkeleton = ({ link }: headerSkeletonProp) => {
  return (
    <div className="carousel-header-skeleton">
      <div className="carousel-header-skeleton__header">
        <Skeleton />
      </div>

      {link && (
        <div className="carousel-header-skeleton__link">
          <Skeleton />
        </div>
      )}
    </div>
  );
};

export default CarouselHeaderSkeleton;

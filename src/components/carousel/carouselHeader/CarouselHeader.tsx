import { Link } from "react-router-dom";
import "./CarouselHeader.scss";
import { FaChevronRight } from "react-icons/fa";
import { CarouselHeaderPropTypes } from "../../../utilities/componentsTypes";

const CarouselHeader = ({ carouselHeader, link }: CarouselHeaderPropTypes) => {
  return (
    <div className="carousel-header">
      <h2 className="carousel-header__title">{carouselHeader}</h2>
      {link && (
        <Link to={link} className="carousel-header__link">
          <span>See all</span>
          <FaChevronRight />
        </Link>
      )}
    </div>
  );
};

export default CarouselHeader;

import { AiFillStar } from "react-icons/ai";
import "./Rating.scss";
import { RatingPropTypes } from "../../utilities/componentsTypes";

const Rating = ({ rating }: RatingPropTypes) => {
  return (
    <span className="rating">
      <AiFillStar />
      <span>{rating}</span>
    </span>
  );
};

export default Rating;

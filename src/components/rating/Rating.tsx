import { AiFillStar } from "react-icons/ai";
import "./Rating.scss";

const Rating = () => {
  return (
    <span className="rating">
      <AiFillStar />
      <span>3.4</span>
    </span>
  );
};

export default Rating;

import "./MovieCard.scss";
import poster from "../../assets/poster.jpg";
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <div
      className="movie-card"
      style={{ background: `url(${poster}) no-repeat center center/cover` }}
    >
      <div className="movie-card__overlay"></div>

      <div className="movie-card__info">
        <Link to="/" className="movie-card__info--title">
          The Umbrella Academy: season three, episode 1
        </Link>
        <div className="movie-card__info--bottom">
          <div className="movie-card__info--bottom_rating">
            <AiFillStar />
            <span>3.4</span>
          </div>
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

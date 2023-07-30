import "./MovieCard.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { carouselCardPropTypes } from "../../utilities/componentsTypes";
import getPosterUrl from "../../utilities/getPosterUrl";
import Rating from "../rating/Rating";

const MovieCard = ({ data: movie }: carouselCardPropTypes) => {
  const posterUrl = getPosterUrl(movie.poster_path);

  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      style={{ background: `url(${posterUrl}) no-repeat center center/cover` }}
    >
      <div
        className="movie-card__overlay"
        onClick={() => navigate(`/movie/${movie.id}`)}
      ></div>

      <div className="movie-card__info">
        <Link to={`/movie/${movie.id}`} className="movie-card__info--title">
          {movie.title}
        </Link>
        <div className="movie-card__info--bottom">
          <Rating rating={parseFloat(movie.vote_average).toFixed(1)} />

          <AiOutlinePlus
            onClick={() =>
              alert(`Sorry, this functionality isn't available yet.`)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

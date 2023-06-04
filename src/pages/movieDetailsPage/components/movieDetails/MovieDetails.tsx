import "./MovieDetails.scss";
import poster from "../../../../assets/poster.jpg";
import Rating from "../../../../components/rating/Rating";
import { FaTrash } from "react-icons/fa";
import CastsCarousel from "../castsCarousel/CastsCarousel";
import CastHeadshot from "../castsCarousel/components/castHeadshot/CastHeadshot";
import { carouselCardPropTypes } from "../../../../utilities/componentsTypes";
import getPosterUrl from "../../../../utilities/getPosterUrl";

const MovieDetails = ({ data: movie }: carouselCardPropTypes) => {
  // const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <div className="movie-details">
      <div className="movie-details__poster">
        <img src={posterUrl} alt="poster" />
      </div>

      <div className="movie-details__info">
        <div className="movie-details__info--header">
          <div className="movie-details__info--header_title">
            <h2>{movie.title}</h2>
            <Rating rating={parseFloat(movie.vote_average).toFixed(1)} />
          </div>

          <div className="movie-details__info--header_genres">
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre.name}</span>
            ))}
          </div>
        </div>

        {/* <div className="movie-details__info--hr"></div> */}

        <div className="movie-details__info--details">
          <p className="movie-details__info--details_overview">
            {movie.overview}
          </p>

          {/* <div className="movie-details__info--details_genres">
            <FaTrash />
            <FaTrash />
            <FaTrash />
            <FaTrash />
          </div> */}

          {/* <div className="test">
            <CastHeadshot />
            <CastHeadshot />
            <CastHeadshot />
          </div> */}
        </div>

        <div className="movie-details__info--buttons">
          <button
            onClick={() =>
              alert(`Sorry, this functionality isn't available yet.`)
            }
          >
            Add to watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

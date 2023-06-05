import "./MovieDetails.scss";
import Rating from "../../../../components/rating/Rating";
import { carouselCardPropTypes } from "../../../../utilities/componentsTypes";
import getPosterUrl from "../../../../utilities/getPosterUrl";

const MovieDetails = ({ data: movie }: carouselCardPropTypes) => {
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

        <div className="movie-details__info--details">
          <p className="movie-details__info--details_overview">
            {movie.overview}
          </p>
        </div>

        <span className="movie-details__info--status">
          Status: {movie.status}
        </span>

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

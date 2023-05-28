import "./MovieDetails.scss";
import poster from "../../../../assets/poster.jpg";
import Rating from "../../../../components/rating/Rating";
import { FaTrash } from "react-icons/fa";
import CastsCarousel from "../castsCarousel/CastsCarousel";
import CastHeadshot from "../castsCarousel/components/castHeadshot/CastHeadshot";

const MovieDetails = () => {
  return (
    <div className="movie-details">
      <div className="movie-details__poster">
        <img src={poster} alt="poster" />
      </div>

      <div className="movie-details__info">
        <div className="movie-details__info--header">
          <div className="movie-details__info--header_title">
            <h2>The Umbrella Academy: season 1 episode 3</h2>
            <Rating />
          </div>

          <div className="movie-details__info--header_genres">
            <span>Action</span>
            <span>Adventure</span>
            <span>Thriller</span>
          </div>
        </div>

        {/* <div className="movie-details__info--hr"></div> */}

        <div className="movie-details__info--details">
          <p className="movie-details__info--details_overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repudiandae officiis possimus, ab fugiat aliquam maxime, commodi
            quos assumenda nesciunt consequatur. Aut nihil quibusdam consequatur
            commodi. Laborum ab pariatur quo?
          </p>

          {/* <div className="movie-details__info--details_genres">
            <FaTrash />
            <FaTrash />
            <FaTrash />
            <FaTrash />
          </div> */}

          {/* <CastsCarousel /> */}
          <div className="test">
            <CastHeadshot />
            <CastHeadshot />
            <CastHeadshot />
          </div>
        </div>

        <div className="movie-details__info--buttons">
          <button>Add to watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

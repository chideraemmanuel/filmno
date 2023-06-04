import "./MovieCard.scss";
import poster from "../../assets/poster.jpg";
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { wishListContext } from "../../contexts/wishListContext";
import {
  carouselCardPropTypes,
  wishListTypes,
} from "../../utilities/componentsTypes";
import getPosterUrl from "../../utilities/getPosterUrl";
import Rating from "../rating/Rating";

// interface carouselCardPropTypes {
//   item: {
//     id: number;
//   };
// }

const MovieCard = ({ data: movie }: carouselCardPropTypes) => {
  // const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const posterUrl = getPosterUrl(movie.poster_path);
  const { wishList, setWishList } = useContext(wishListContext);

  const addToWishList = (id: number) => {
    wishList.map((wishListItem: any) => {
      if (wishListItem.id === id) {
        return;
        // already in wishlist
      } else {
        // setWishList([...wishList, item]);
        console.log(id);
      }
    });
    console.log(id);
  };

  return (
    <div
      className="movie-card"
      style={{ background: `url(${posterUrl}) no-repeat center center/cover` }}
    >
      <div className="movie-card__overlay"></div>

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

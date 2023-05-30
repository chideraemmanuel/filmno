import "./MovieCard.scss";
import poster from "../../assets/poster.jpg";
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { wishListContext } from "../../contexts/wishListContext";
import { carouselCardPropTypes } from "../../utilities/componentsTypes";

// interface carouselCardPropTypes {
//   item: {
//     id: number;
//   };
// }

const MovieCard = ({ item }: carouselCardPropTypes) => {
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
          <AiOutlinePlus onClick={() => addToWishList(2)} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

import { useContext } from "react";
import { Link } from "react-router-dom";
import "./HeroCarouselCard.scss";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import poster from "../../../../assets/poster.jpg";
import { wishListContext } from "../../../../contexts/wishListContext";
import { carouselCardPropTypes } from "../../../../utilities/componentsTypes";

const overview =
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ut a optio architecto perferendis nihil illum sequi doloremque quasi voluptas reiciendis rem vero ipsa libero, id eligendi non ipsum explicabo.";

// interface carouselCardPropTypes {
//   item: {
//     id: number;
//   };
// }

const HeroCarouselCard = ({ item }: carouselCardPropTypes) => {
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
      className="hero-carousel-card"
      style={{ background: `url(${poster}) no-repeat center center/cover` }}
    >
      <div className="hero-carousel-card__overlay"></div>

      <div className="hero-carousel-card__content">
        <Link to="/" className="hero-carousel-card__content--info">
          <h2 className="hero-carousel-card__content--info_title">
            The Umbrella Academy: season three, episode 1
          </h2>
          <p className="hero-carousel-card__content--info_paragraph">
            {overview.slice(0, 100)}...
          </p>
        </Link>
        <div className="hero-carousel-card__content--bottom">
          <div className="hero-carousel-card__content--bottom_rating">
            <AiFillStar />
            <span>3.4</span>
          </div>
          <AiOutlinePlus onClick={() => addToWishList(1)} />
        </div>
      </div>
    </div>
  );
};

export default HeroCarouselCard;

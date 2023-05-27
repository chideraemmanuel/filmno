import axios from "axios";
import Carousel from "../../components/carousel/Carousel";
import HeroCarousel from "../../components/heroCarousel/HeroCarousel";
import "./Homepage.scss";

const data = [1, 2, , 3, 4, 5, 6, 7, 8, 9, 0];

// const accessToken = import.meta.env.VITE_TMBD_API_READ_ACCESS_accessToken;

// axios.get("https://example.com/getSomething", {
//   headers: {
//     Authorization: "Bearer " + accessToken,
//   },
// });

const Homepage = () => {
  return (
    <div className="homepage">
      <HeroCarousel
        data={data}
        carouselHeader="Trending Movies"
        link="/discover"
      />
      <Carousel data={data} carouselHeader="Carousel Header" link="/" />
      <Carousel data={data} carouselHeader="Carousel Header" link="/" />
      <Carousel data={data} carouselHeader="Carousel Header" link="/" />
    </div>
  );
};

export default Homepage;

import Carousel from "../../components/carousel/Carousel";
import HeroCarousel from "../../components/heroCarousel/HeroCarousel";
import MovieCard from "../../components/movieCard/MovieCard";
import "./Homepage.scss";

const data = [1, 2, , 3, 4, 5, 6, 7, 8, 9, 0];

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

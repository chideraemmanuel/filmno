import "./HeroCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import HeroCarouselCard from "./components/heroCarouselCard/HeroCarouselCard";
import CarouselHeader from "../carousel/carouselHeader/CarouselHeader";
import MovieCard from "../movieCard/MovieCard";
import { CarouselPropTypes } from "../../utilities/componentsTypes";

// interface CarouselPropTypes {
//   data: any[];
//   carouselHeader: string;
//   link: string;
// }

const HeroCarousel = ({ data, carouselHeader, link }: CarouselPropTypes) => {
  return (
    <section className="hero-carousel">
      <CarouselHeader carouselHeader={carouselHeader} link={link} />

      <div className="carousel__slide">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          //   breakpoints={{
          //     1440: {
          //       slidesPerView: 2.5,
          //     },
          //     1024: {
          //       slidesPerView: 5.5,
          //     },
          //     768: {
          //       slidesPerView: 4.5,
          //     },
          //     500: {
          //       slidesPerView: 3.5,
          //     },
          //     0: {
          //       slidesPerView: 2.5,
          //     },
          //   }}
          className="mySwiper"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide key={item._id}>
                <HeroCarouselCard item={item} />
                {/* <MovieCard /> */}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;

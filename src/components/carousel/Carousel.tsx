import "./Carousel.scss";
import CarouselHeader from "./carouselHeader/CarouselHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import MovieCard from "../movieCard/MovieCard";
import { CarouselPropTypes } from "../../utilities/componentsTypes";

const Carousel = ({ data, carouselHeader, link }: CarouselPropTypes) => {
  return (
    <section className="carousel">
      <CarouselHeader carouselHeader={carouselHeader} link={link} />

      <div className="carousel__slide">
        <Swiper
          slidesPerView={10}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1920: {
              slidesPerView: 7.5,
            },
            1440: {
              slidesPerView: 6.5,
            },
            1024: {
              slidesPerView: 5.5,
            },
            768: {
              slidesPerView: 4.5,
            },
            500: {
              slidesPerView: 3.5,
            },
            0: {
              slidesPerView: 2.5,
            },
          }}
          className="mySwiper"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;

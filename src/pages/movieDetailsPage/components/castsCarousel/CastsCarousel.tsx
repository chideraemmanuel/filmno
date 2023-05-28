import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "./CastsCarousel.scss";
import CastHeadshot from "./components/castHeadshot/CastHeadshot";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const CastsCarousel = () => {
  return (
    <div className="casts-carousel">
      <span>Casts Carousel!</span>

      <div className="casts-carousel__slide">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          breakpoints={
            {
              // 1440: {
              //   slidesPerView: 5.5,
              // },
              // 1024: {
              //   slidesPerView: 4.5,
              // },
              // 768: {
              //   slidesPerView: 3.5,
              // },
              // 500: {
              //   slidesPerView: 3.5,
              // },
              // 0: {
              //   slidesPerView: 2.5,
              // },
            }
          }
          className="mySwiper"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide key={item}>
                <CastHeadshot />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CastsCarousel;

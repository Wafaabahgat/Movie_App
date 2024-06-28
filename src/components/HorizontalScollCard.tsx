import { FC } from "react";
import "swiper/swiper-bundle.min.css";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

interface HorizontalScrollCardProps {
  ttl: string;
  movieData: Array<any>;
}

const breakpoints = {
  480: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  756: {
    slidesPerView: 3,
    spaceBetween: 5,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1527: {
    slidesPerView: 6,
    spaceBetween: 10,
  },
};

const HorizontalScrollCard: FC<HorizontalScrollCardProps> = ({
  ttl,
  movieData = [],
}) => {
  return (
    <div className="container px-4 mx-auto my-10 ">
      <h1 className="mb-2 text-xl font-bold text-white lg:text-3xl">{ttl}</h1>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        {movieData.map((data, index) => (
          <SwiperSlide key={data.id + "ttl" + index}>
            <Card data={data} index={index + 1} tranding={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalScrollCard;

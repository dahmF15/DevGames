import React from "react";
import Images from "../components/Images";
import DragonBallSparkingZero from "../assets/DragonBallSparkingZero.jpg";
import Spiderman from "../assets/spiderman.avif";
import GhostOfTsushima from "../assets/GhostOfTsushimaa.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const items = [
  {
    id: 1,
    src: Spiderman,
    alt: "Spiderman",
  },
  {
    id: 2,
    src: GhostOfTsushima,
    alt: "Ghost of Tsushima",
  },
  {
    id: 3,
    src: DragonBallSparkingZero,
    alt: "Dragon Ball Sparking Zero",
  },
];
export default function Slider() {
  return (
    <div className="h-full w-full mt-16" >
      <Swiper
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Number of slides to show
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // Autoplay delay in milliseconds
        }}
        className="h-full w-full"
      >
        {items.map((items) => (
          <SwiperSlide key={items.id}>
            <div>
              <Images src={items.src} alt={items.alt} className={'h-full w-full rounded-3xl'}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

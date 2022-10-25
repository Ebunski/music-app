import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper h-screen"
        grabCursor={true}
      >
        <SwiperSlide className="grid place-items-center w-[200px]">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center w-[200px]">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center  w-[200px]">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center w-[200px]">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center w-[200px]">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center w-[200px]">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center w-[200px]">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center  w-[200px]">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center w-[200px]">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center w-[200px]">
          Slide 5
        </SwiperSlide>
      </Swiper>
    </>
  );
}

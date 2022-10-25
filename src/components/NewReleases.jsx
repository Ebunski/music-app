import React, { Fragment } from "react";
// import Slideshow from "./utilities/Slideshow";
// import SlideItem from "./utilities/SlideItem";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";

export default function NewReleases() {
  const data = [
    {
      id: 1,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 2,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 3,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 4,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 5,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 6,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 7,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 8,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 9,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
    {
      id: 10,
      image: "/img/Rectangle 17.png",
      title: "wabebe",
      artist: "eweeweew",
    },
  ];
  const slides = data.map(({ image, title, artist, id }, index) => (
    <Fragment key={id}>
      <SwiperSlide key={id} className="w-[150px]">
        <div className="">
          <div className="h-32 w-32 rounded-xl overflow-hidden">
            <img src={image} alt={title} />
          </div>
          <h4 className="text-sm font-light">{title}</h4>
          <span className="text-xs font-quicksand text-white/50">{artist}</span>
        </div>
      </SwiperSlide>
    </Fragment>
  ));

  return (
    <section className="my-6">
      <h2 className=" text-lg pb-2">New releases</h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        className="mySwiper h-auto"
      >
        {slides}
      </Swiper>
    </section>
  );
}

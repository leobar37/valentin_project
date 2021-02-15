import React, { useEffect, useRef } from "react";
import "./stepia.scss";
import Youtube from "react-youtube";

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Particles from "react-particles-js";
import { params } from "../globals/constants";
import { gsap } from "gsap";
import VideoPlayer from "react-video-js-player";

SwiperCore.use([Pagination, SwiperSlide]);
// styles
const ValentinDedication = () => {
  // animatins
  const elementOne = useRef<HTMLDivElement>(null);
  const heartBeats = (parent: HTMLElement) => {
    const heart = parent.querySelector("i");
    gsap.from(parent, { y: -50 });
    const line = gsap.timeline({ yoyo: true, repeat: -1 });
    line.fromTo(heart, { scale: 0.8 }, { scale: 1 });
    line.play();
  };
  useEffect(() => {
    if (elementOne.current) {
      heartBeats(elementOne.current);
    }
  }, [elementOne.current]);
  return (
    <>
      <Swiper
        className="slider"
        pagination={{ clickable: true, el: ".pagination" }}
      >
        <SwiperSlide className="one">
          <div className="box" ref={elementOne}>
            <i className="fas fa-heart"></i>
            <h1>you are my favorite person</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="two">
          <div className="box">
            {/* <i className="fas fa-heart"></i> */}
            <h1>Thanks you for existing</h1>
          </div>
          <Particles className="particles" params={params}></Particles>
        </SwiperSlide>
        <SwiperSlide className="three">
          <VideoPlayer
            autoplay={true}
            className="player"
            src={"/video.webm"}
          ></VideoPlayer>

          <Particles
            className="particles"
            params={{
              ...params,
              particles: { ...params.particles, size: { value: 20 } },
            }}
          ></Particles>
        </SwiperSlide>
        <div className="pagination"></div>
      </Swiper>
    </>
  );
};

export default ValentinDedication;

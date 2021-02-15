import React, { useEffect, useRef } from "react";
import "./stepia.scss";
import Youtube from "react-youtube";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Particles from "react-particles-js";
import { params } from "../globals/constants";
import { gsap } from "gsap";
import VideoPlayer from "react-video-js-player";

SwiperCore.use([Pagination, SwiperSlide, Autoplay]);
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
      console.log("run animation");

      heartBeats(elementOne.current);
    }
  }, [elementOne.current]);
  return (
    <>
      <Swiper
        autoplay={{ delay: 3000 }}
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
        <SwiperSlide className="addon_valentin">
          <h1 className="title">happy Valentines</h1>
          <div className="container">
            <svg width={330} height={330} viewBox="0 0 330 330">
              <path
                className="heart1"
                d="M175.75975,179.61a63.337,63.337,0,0,1-10.755,7.195c-.005,0-.005,0-.005.005,0-.005,0-.005-.005-.005-7.88-4.25-13.14-8.82-16.645-13.085-7.035-8.535-7.04-15.845-7.015-16.87v-.11c0-7.075,5.115-13.55,12.8-13.55a10.63737,10.63737,0,0,1,7.27,2.71,12.61014,12.61014,0,0,1,3.595,5.795c1.21-4.11,4.75-8.505,10.865-8.505,7.685,0,12.8,6.475,12.8,13.55v.11C188.69975,158.11,188.67473,168.79,175.75975,179.61Z"
                style={{ fill: "#db3f3c" }}
              />
              <path
                className="heart2"
                d="M175.75975,179.61a63.337,63.337,0,0,1-10.755,7.195c-.005,0-.005,0-.005.005,0-.005,0-.005-.005-.005-7.88-4.25-13.14-8.82-16.645-13.085-7.035-8.535-7.04-15.845-7.015-16.87v-.11c0-7.075,5.115-13.55,12.8-13.55a10.63737,10.63737,0,0,1,7.27,2.71,12.61014,12.61014,0,0,1,3.595,5.795c1.21-4.11,4.75-8.505,10.865-8.505,7.685,0,12.8,6.475,12.8,13.55v.11C188.69975,158.11,188.67473,168.79,175.75975,179.61Z"
                style={{ fill: "#ed615f" }}
              />
              <path
                className="heart3"
                d="M175.75975,179.61a63.337,63.337,0,0,1-10.755,7.195c-.005,0-.005,0-.005.005,0-.005,0-.005-.005-.005-7.88-4.25-13.14-8.82-16.645-13.085-7.035-8.535-7.04-15.845-7.015-16.87v-.11c0-7.075,5.115-13.55,12.8-13.55a10.63737,10.63737,0,0,1,7.27,2.71,12.61014,12.61014,0,0,1,3.595,5.795c1.21-4.11,4.75-8.505,10.865-8.505,7.685,0,12.8,6.475,12.8,13.55v.11C188.69975,158.11,188.67473,168.79,175.75975,179.61Z"
                style={{ fill: "#af2829" }}
              />
              <g className="heart">
                <path
                  d="M186.5195,194.22a126.674,126.674,0,0,1-21.51,14.39c-.01,0-.01,0-.01.01,0-.01,0-.01-.01-.01-15.76-8.5-26.28-17.64-33.29-26.17-14.07-17.07-14.08-31.69-14.03-33.74v-.22c0-14.15,10.23-27.1,25.6-27.1a21.27474,21.27474,0,0,1,14.54,5.42,25.22028,25.22028,0,0,1,7.19,11.59c2.42-8.22,9.5-17.01,21.73-17.01,15.37,0,25.6,12.95,25.6,27.1v.22C212.39951,151.22,212.34946,172.58,186.5195,194.22Z"
                  style={{
                    fill: "#e64228",
                    stroke: "#551207",
                    strokeLinecap: "round",
                    strokeLinejoin: "bevel",
                    strokeWidth: "3px",
                  }}
                />
                <path
                  d="M186.5195,194.22a126.674,126.674,0,0,1-21.51,14.39c-.01,0-.01,0-.01.01,0-.01,0-.01-.01-.01-15.76-8.5-26.28-17.64-33.29-26.17a31.60208,31.60208,0,0,1,14.18-1.59c14.6,1.93,19.03,14.64,31.08,15.34A19.753,19.753,0,0,0,186.5195,194.22Z"
                  style={{ opacity: "0.30000000000000004" }}
                />
                <path
                  d="M134.99948,154a9.08887,9.08887,0,0,1,2.23688-5.90379,8.4263,8.4263,0,0,1,6.24648-2.98273,8.13294,8.13294,0,0,1,6.27362,3.00362,9.55413,9.55413,0,0,1,2.243,5.8829,28.8953,28.8953,0,0,0-4.26665-3.70207,7.51783,7.51783,0,0,0-4.22375-1.40207,8.135,8.135,0,0,0-4.29047,1.40509A23.31972,23.31972,0,0,0,134.99948,154Z"
                  style={{ fill: "#551207" }}
                />
                <path
                  d="M179.99948,154a9.08887,9.08887,0,0,1,2.23688-5.90379,8.4263,8.4263,0,0,1,6.24648-2.98273,8.13294,8.13294,0,0,1,6.27362,3.00362,9.55413,9.55413,0,0,1,2.243,5.8829,28.8953,28.8953,0,0,0-4.26665-3.70207,7.51783,7.51783,0,0,0-4.22375-1.40207,8.135,8.135,0,0,0-4.29047,1.40509A23.31972,23.31972,0,0,0,179.99948,154Z"
                  style={{ fill: "#551207" }}
                />
                <path
                  d="M175.00146,162.80809a9.571,9.571,0,0,1-2.95053,6.30429,10.22907,10.22907,0,0,1-6.88292,2.90836,10.44728,10.44728,0,0,1-3.82268-.66988,10.23651,10.23651,0,0,1-6.34784-8.20824,25.54,25.54,0,0,0,5.06267,3.57362,11.85794,11.85794,0,0,0,2.49974.9357,8.53348,8.53348,0,0,0,1.2542.20262,7.23355,7.23355,0,0,0,1.26071.06387,11.1968,11.1968,0,0,0,5.03716-1.37227A21.55674,21.55674,0,0,0,175.00146,162.80809Z"
                  style={{ fill: "#551207" }}
                />
                <ellipse
                  cx="197.50783"
                  cy="134.50775"
                  rx="4.8264"
                  ry="8.41647"
                  transform="translate(-37.26264 179.05553) rotate(-45)"
                  style={{ fill: "#fff", opacity: "0.7000000000000001" }}
                />
              </g>
            </svg>
          </div>
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

"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { equipoRealizacion } from "@/app/lib/autor-data";
import Image from "next/image";
import Slider from "react-slick";
import React from "react";

const SlickSlider = () => {
  const settingsXL = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settingsLG = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settingsMD = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settingsSM = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="hidden xl:block">
        <Slider {...settingsXL}>
          {equipoRealizacion.map((e) => (
            <div className="">
              <div key={e.nombre} className={`rounded-lg grid  `}>
                <Image
                  src={e.imagen}
                  alt={e.cargo}
                  className="rounded-t-xl"
                  width={320}
                  height={584}
                  priority
                />
                <div className="bg-gris-card w-[320px] px-2">
                  <p className="text-2xl">{e.nombre}</p>
                  <p className="text-lg">{e.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block xl:hidden">
        <Slider {...settingsLG}>
          {equipoRealizacion.map((e) => (
            <div className="">
              <div key={e.nombre} className={`rounded-lg grid  `}>
                <Image
                  src={e.imagen}
                  alt={e.cargo}
                  className="rounded-t-xl"
                  width={380}
                  height={584}
                  priority
                />
                <div className="bg-gris-card w-[380px] px-2">
                  <p className="text-2xl">{e.nombre}</p>
                  <p className="text-lg">{e.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden md:block lg:hidden">
        <Slider {...settingsMD}>
          {equipoRealizacion.map((e) => (
            <div className="">
              <div key={e.nombre} className={`rounded-lg grid  `}>
                <Image
                  src={e.imagen}
                  alt={e.cargo}
                  className="rounded-t-xl"
                  width={220}
                  height={177}
                  priority
                />
                <div className="bg-white w-[220px] px-2">
                  <p className="text-2xl text-center">{e.nombre}</p>
                  <p className="text-lg text-center">{e.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" w-full md:hidden">
        <Slider {...settingsSM}>
          {equipoRealizacion.map((e) => (
            <div className="">
              <div key={e.nombre} className={`rounded-lg   `}>
                <Image
                  src={e.imagen}
                  alt={e.cargo}
                  className="rounded-t-xl"
                  objectFit="fill"
                  width={1280}
                  height={720}
                  priority
                />
                <div className="bg-white  px-2">
                  <p className="text-2xl text-center">{e.nombre}</p>
                  <p className="text-lg text-center">{e.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SlickSlider;

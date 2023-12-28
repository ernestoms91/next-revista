"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { equipoRealizacion } from "../../lib/autor-data";

const AutorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? equipoRealizacion.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === equipoRealizacion.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className=" grid  grid-cols-3">
      <div className="rounded-lg">
        <Image
          src={equipoRealizacion[0].imagen}
          alt={equipoRealizacion[0].cargo}
          className="rounded-t-xl"
          width={380}
          height={584}
          priority
        />
        <div className="bg-gris-card">
          <p>{equipoRealizacion[0].nombre}</p>
          <p>{equipoRealizacion[0].cargo}</p>
        </div>
      </div>
    </div>
  );
};
export default AutorSlider;

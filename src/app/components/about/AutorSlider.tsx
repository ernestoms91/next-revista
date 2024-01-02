"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { equipoRealizacion } from "../../lib/autor-data";
import { RxDotFilled } from "react-icons/rx";

const AutorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cantDots = Math.ceil(equipoRealizacion.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 < equipoRealizacion.length ? prevIndex + 3 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getItemAtIndex = (index: number) => {
    const adjustedIndex = index % equipoRealizacion.length;
    return equipoRealizacion[adjustedIndex];
  };

  return (
    <>
    <div className="p-4 grid grid-cols-3 gap-2">
      {[0, 1, 2].map((offset) => {
        const item = getItemAtIndex(currentIndex + offset);
        const isCentered = offset === 1 ? 'justify-center' : (offset === 2 ? 'justify-end' : '');
        return (
          <div key={offset} className={`rounded-lg grid ${isCentered}  `}>
            <Image
              src={item.imagen}
              alt={item.cargo}
              className="rounded-t-xl"
              width={380}
              height={584}
              priority
            />
            <div className="bg-gris-card w-[380px] px-2">
              <p className="text-2xl">{item.nombre}</p>
              <p className="text-lg">{item.cargo}</p>
            </div>
          </div>
        );
      })}
    </div>
          <div className="flex top-4 justify-center py-2">
        {Array.from({ length: cantDots }, (_, index) => (
          <RxDotFilled
            key={index}
            className={`text-gray-500 mx-1 cursor-pointer ${
              Math.floor(currentIndex / 3) === index ? 'text-gray-900' : ''
            }`}
            onClick={() => setCurrentIndex(index * 3)}
          />
        ))}
      </div>


        </>
  );
};

export default AutorSlider;

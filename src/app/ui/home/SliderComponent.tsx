import { calcularTiempoLectura } from "@/app/lib/helpers/calcularTiempoLectura ";
import { informaciones } from "@/app/lib/home-data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },

  {
    url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  },
];

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
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
    <div className="  w-full m-auto  px-4 relative group hidden md:block">
      <div
        style={{
          backgroundImage: `url(${informaciones[currentIndex].imagen})`,
        }}
        className="w-full h-[350px] h-full rounded-2xl rounded-b-none bg-center bg-cover duration-500"
      ></div>
      <div id="20" className="bg-white static z-10 rounded-bl-3xl p-4">
        <h1 className="font-bold text-4xl text-left line-clamp-3 my-2">
          {informaciones[currentIndex].titulo}
        </h1>
        <p className="line-clamp-3 text-2xl">
          {informaciones[currentIndex].informacion}
        </p>
        <div className="flex justify-between">
          <p>
            Por:{" "}
            <span className="font-bold text-xl">
              {informaciones[currentIndex].autor}
            </span>
          </p>
          <div className="flex gap-2">
            <Image
              src="/eye.svg"
              alt="Search Logo"
              width={30}
              height={30}
              priority
            />
            <p className=" text-xl">
              {calcularTiempoLectura(informaciones[currentIndex].informacion)}{" "}
              min{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer  ${
              slideIndex === currentIndex ? "text-black" : "text-gray-300"
            } `}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;

"use client";
import Publicaciones from "./ui/home/Publicaciones";
import Podcast from "./ui/home/Podcast";
import Publicidad from "./ui/cards/Publicidad";
import SliderComponent from "./ui/home/SliderComponent";
import PublicacionesDesktop from "./ui/home/PublicacionesDesktop";
import Navbar from "./ui/Navbar";
import { CustomizedFooter } from "./ui/CustomizedFooter";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className=" ">
      <div className="bg-gris-claro rounded-lg p-8 lg:bg-white">
        <SliderComponent />
        <Publicaciones />
      </div>
      <div className="bg-azul-azulito p-8 ">
        <Podcast />
      </div>
      <div className=" bg-white p-8 hidden md:block">
        <PublicacionesDesktop />
      </div>
      <div className="bg-gris-home p-8 md:hidden">
        <Publicidad />
      </div>
      <div className="bg-gris-claro p-8  md:hidden">
        <Publicaciones />
      </div>
    </div>
    <CustomizedFooter />
    </>
  );
}

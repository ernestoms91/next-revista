"use client";
import Publicaciones from "@/app/components/home/Publicaciones";
import Podcast from "@/app/components/home/Podcast";
import Publicidad from "@/app/components/ui/cards/Publicidad";
import SliderComponent from "@/app/components/home/SliderComponent";
import PublicacionesDesktop from "@/app/components/home/PublicacionesDesktop";
import Navbar from "@/app/components/ui/Navbar";
import { CustomizedFooter } from "@/app/components/ui/CustomizedFooter";

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

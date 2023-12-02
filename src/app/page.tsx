"use client";
import Editor from "@/app/ui/Editor/Jodit";
import ArticuloCard from "./ui/cards/ArticuloCard";
import { informaciones } from "./lib/home-data";
import Publicaciones from "./ui/home/Publicaciones";
import Podcast from "./ui/home/Podcast";
import Publicidad from "./ui/cards/Publicidad";
import SliderComponent from './ui/home/SliderComponent';

export default function Home() {
  return (
    <div className=" ">
      <div className="bg-gris-claro rounded-lg p-8 lg:bg-white">
        <SliderComponent />
        <Publicaciones />
      </div>
      <div className="bg-azul-azulito p-8 ">
        <Podcast />
      </div>
      <div className="bg-gris-home p-8">
        <Publicidad />
      </div>
      <div className="bg-gris-claro p-8">
        <Publicaciones />
      </div>
    </div>
  );
}

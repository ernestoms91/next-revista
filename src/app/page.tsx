"use client";
import Editor from "@/app/ui/Editor/Editor";
import ArticuloCard from "./ui/cards/ArticuloCard";
import { informaciones } from "./lib/home-data";
import Publicaciones from "./ui/home/Publicaciones";
import Podcast from "./ui/home/Podcast";
import Publicidad from "./ui/cards/Publicidad";

export default function Home() {
  return (
    <>
      <div className="bg-gris-claro p-8">
        <Publicaciones />
      </div>
      <div className="bg-azul-azulito p-8">
        <Podcast />
      </div>
      <div className="bg-gris-home p-8">
        <Publicidad />
      </div>
      <div className="bg-gris-claro p-8">
        <Publicaciones />
      </div>
    </>
  );
}

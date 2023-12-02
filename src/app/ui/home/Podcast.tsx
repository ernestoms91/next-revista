import React from "react";
import ArticuloCard from "../cards/ArticuloCard";
import { informaciones, podcasts } from "@/app/lib/home-data";
import PodcastDestacado from "../cards/PodcastDestacado";
import PodcastNormal from "../cards/PodcastNormal";
import PodcastProximo from "../cards/PodcastProximo";

const Podcast = () => {
  return (
    <div className="md:mx-5 ">
      <h1 className="font-bold text-2xl md:my-5 md:text-3xl">Podcast</h1>
      <div className="grid gap-4 lg:grid-cols-2 md:gap-10">
      {podcasts &&
        podcasts.map((p, i) => {
          if (i === 2) {
            return <PodcastProximo imagen={p.imagen} titulo={p.titulo} key={i} />;
          }
          if (i === 1) {
            return (
              <PodcastNormal
                imagen={p.imagen}
                titulo={p.titulo}
                descripcion={p.descripcion}
                duracion={p.duracion}
                fecha={p.fecha}
                key={i}
              />
            );
          }
          if (i === 0) {
            return (
              <PodcastDestacado
                imagen={p.imagen}
                titulo={p.titulo}
                descripcion={p.descripcion}
                duracion={p.duracion}
                key={i}
              />
            );
          }
        })}
        </div>
    </div>
  );
};

export default Podcast;

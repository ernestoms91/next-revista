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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:gap-10">
        {podcasts && (
          <>
            <div className="col-span-3">
              <PodcastDestacado
                imagen={podcasts[0].imagen}
                titulo={podcasts[0].titulo}
                descripcion={podcasts[0].descripcion}
                duracion={podcasts[0].duracion}
                key={podcasts[0].fecha}
              />
            </div>
            <div className="col-span-2 flex flex-col gap-4 justify-between">
              <PodcastNormal
                imagen={podcasts[1].imagen}
                titulo={podcasts[1].titulo}
                descripcion={podcasts[1].descripcion}
                duracion={podcasts[1].duracion}
                fecha={podcasts[1].fecha}
                key={podcasts[1].fecha}
              />

              <PodcastProximo
                imagen={podcasts[2].imagen}
                titulo={podcasts[2].titulo}
                key={podcasts[2].fecha}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Podcast;

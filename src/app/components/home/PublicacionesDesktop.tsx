import React from "react";
import ArticuloCard from "@/app/components/ui/cards/ArticuloCard";
import { informaciones } from "@/app/lib/home-data";
import ArticuloNormalCard from "@/app/components/ui/cards/ArticuloNormalCard";
import Publicidad from "@/app/components/ui/cards/Publicidad";

const PublicacionesDesktop = () => {
  return (
    <div className=" hidden md:mx-5 md:grid grid-cols-2 gap-8">
      <div className="flex-col">
        {informaciones && (
          <>
            <ArticuloCard
              titulo={informaciones[0].titulo}
              imagen={informaciones[0].imagen}
              informacion={informaciones[0].informacion}
              autor={informaciones[0].autor}
              key={informaciones[0].autor}
            />

            <ArticuloNormalCard
              titulo={informaciones[1].titulo}
              imagen={informaciones[1].imagen}
              informacion={informaciones[1].informacion}
              key={informaciones[1].autor}
            />
          </>
        )}
      </div>
      <div className="flex-col">
      {informaciones && (
          <>
             <ArticuloNormalCard
              titulo={informaciones[2].titulo}
              imagen={informaciones[2].imagen}
              informacion={informaciones[2].informacion}
              key={informaciones[2].autor}
            />
            <ArticuloCard
              titulo={informaciones[3].titulo}
              imagen={informaciones[3].imagen}
              informacion={informaciones[3].informacion}
              autor={informaciones[3].autor}
              key={informaciones[3].autor}
            />
          </>
        )}
      </div>
      <hr className="bg-black h-[4px] col-span-2" />
      <Publicidad />

    </div>
  );
};

export default PublicacionesDesktop;

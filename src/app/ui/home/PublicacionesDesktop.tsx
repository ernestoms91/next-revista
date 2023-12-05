import React from "react";
import ArticuloCard from "../cards/ArticuloCard";
import { informaciones } from "@/app/lib/home-data";
import ArticuloNormalCard from "../cards/ArticuloNormalCard";

const PublicacionesDesktop = () => {
  return (
    <div className=" hidden md:mx-5 md:grid grid-cols-2 gap-8">
      <div className="flex-col">
        {informaciones &&
          informaciones.map((inf, i) => {
            if (i % 2 === 0) {
              return (
                <ArticuloCard
                  titulo={inf.titulo}
                  imagen={inf.imagen}
                  informacion={inf.informacion}
                  autor={inf.autor}
                  key={i}
                />
              );
            }
          })}
      </div>
      <div className="flex-col">
        {informaciones &&
          informaciones.map((inf, i) => {
            if (i % 2 === 0) {
              return (
                <ArticuloNormalCard
                  titulo={inf.titulo}
                  imagen={inf.imagen}
                  informacion={inf.informacion}
                  autor={inf.autor}
                  key={i}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default PublicacionesDesktop;

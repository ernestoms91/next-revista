import React from "react";
import ArticuloCard from "../cards/ArticuloCard";
import { informaciones } from "@/app/lib/home-data";

const Publicaciones = () => {
  return (
    <div className="grid gap-4 ">
      <h1 className="font-bold text-2xl">Últimas publicaciones</h1>
      {informaciones &&
        informaciones.map((inf, i) => (
          <ArticuloCard
            titulo={inf.titulo}
            imagen={inf.imagen}
            informacion={inf.informacion}
            autor={inf.autor}
          />
        ))}
    </div>
  );
};

export default Publicaciones;


import ArticuloCard from "@/app/components/ui/cards/ArticuloCard";
import { informaciones } from "@/app/lib/home-data";

const Publicaciones = () => {
  return (
    <div className="grid gap-4 md:hidden ">
      <h1 className="font-bold text-2xl">Últimas publicaciones</h1>
      {informaciones &&
        informaciones.map((inf, i) => (
          <ArticuloCard
            titulo={inf.titulo}
            imagen={inf.imagen}
            informacion={inf.informacion}
            autor={inf.autor}
            key={i}
          />
        ))}
    </div>
  );
};

export default Publicaciones;

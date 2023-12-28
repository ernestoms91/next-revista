import { calcularTiempoLectura } from "@/app/lib/helpers/calcularTiempoLectura ";
import Image from "next/image";
import React from "react";

interface Iprop  {
  titulo: string;
  imagen: string;
  informacion: string;
  autor: string;
}

const ArticuloCard = ({titulo,imagen,informacion, autor}:Iprop) => {

  return (
    <div className="rounded-t-3xl rounded-r-3xl max-w-7xl my-2 md:my-8">
      <div className="relative w-full">
        <Image
          src={imagen}
          alt={`Picture of the author`}
          className="rounded-t-3xl "
          width={1280}
          height={366}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute bottom-2 right-2">
          <Image
            src="/4.svg"
            alt="Search Logo"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
      <div className="bg-gris-card rounded-br-3xl p-2">
        <h1 className="font-bold text-2xl text-left line-clamp-3 my-2">{titulo}</h1>
        <p className="line-clamp-3">{informacion}
        </p>
        <div className="flex justify-between">
          <p>
            Por: <span className="font-bold">{autor}</span>
          </p>
          <div className="flex gap-2">
            <Image
              src="/clock.svg"
              alt="Search Logo"
              width={20}
              height={20}
              priority
            />
            <p>{calcularTiempoLectura(informacion)} min </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticuloCard;

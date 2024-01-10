import { calcularTiempoLectura } from "@/app/lib/helpers/calcularTiempoLectura ";
import Image from "next/image";
import React from "react";

interface Iprop  {
  titulo: string;
  imagen: string;
  informacion: string;
  autor: string;
  enunciado: string;
}

const ArticuloCard = ({titulo,imagen,informacion, autor, enunciado}:Iprop) => {

  return (
    <div className="rounded-t-3xl rounded-r-3xl max-w-7xl ">
      
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
        <div className="absolute bottom-4 right-4">
          <Image
            src="/4.svg"
            alt="Search Logo"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
      <div className="bg-gris-claro2 rounded-br-3xl p-2">
        <h1 className="font-bold text-lg  md:text-2xl text-left line-clamp-3 my-2 text-gris-oscuro">{titulo}</h1>
        <p className="line-clamp-3 text-[10px] text-gris-oscuro md:text-sm md:text-gris-bienclaro">{enunciado}
        </p>
        <div className="flex justify-between">
          <p className="text-xs md:text-sm my-2">
            Por <span className="font-gris-oscuro font-bold">{autor}</span>
          </p>
          <div className="flex gap-2 items-center mx-2">
            <Image
              src="/clock.svg"
              alt="Search Logo"
              className="w-3 h-3"
              width={20}
              height={20}
              priority
            />
            <p className="text-xs md:text-sm">{calcularTiempoLectura(informacion)} min </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticuloCard;

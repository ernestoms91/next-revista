import { calcularTiempoLectura } from "@/app/lib/helpers/calcularTiempoLectura ";
import Image from "next/image";
import React from "react";

interface Iprop {
  titulo: string;
  imagen: string;
  descripcion: string;
  duracion: number;
}

const PodcastDestacado = ({ titulo, imagen, descripcion, duracion }: Iprop) => {
  return (
    <div className="rounded-t-3xl rounded-l-3xl max-w-7xl row-span-2 ">
      <div className="relative w-full">
        <Image
          src={imagen}
          alt={`Picture of the author`}
          className="rounded-t-3xl rounded-l-3xl md:rounded-bl-none "
          width={1280}
          height={720}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute bottom-1/2 right-[45%] md:bottom-4 md:right-4">
          <Image
            src="/micro.svg"
            alt="Search Logo"
            width={ 40}
            height={40}
            priority
            className="md:hidden"
          />
          <Image
            src="/micro.svg"
            alt="Search Logo"
            width={ 70}
            height={70}
            priority
            className="hidden md:block"
          />
        </div>
      </div>
      <div className=" rounded-br-3xl p-2 md:bg-gris-claro2">
        <h1 className="font-bold text-2xl text-left line-clamp-3 my-2">
          {titulo}
        </h1>
        <p className="line-clamp-3">{descripcion}</p>
        <div className="flex justify-end">
          <div className="flex gap-2">
            <Image
              src="/clock.svg"
              alt="Search Logo"
              width={15}
              height={15}
              priority
            />
            <p>{duracion} min </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDestacado;

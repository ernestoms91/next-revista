import React from "react";
import Image from "next/image";
interface Iprop {
  imagen: string;
  titulo: string;
}

const PodcastProximo = ({ imagen, titulo }: Iprop) => {
    return (
      <div className="relative w-full">
        <Image
          src={imagen}
          alt="Picture of the author"
          className="rounded-t-3xl rounded-l-3xl"
          objectFit="cover"
          width={1280}
          height={720}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white">La próxima semana</h1>
            <p className="text-azul-oscuro line-clamp-2">{titulo}</p>
          </div>
        </div>
      </div>
    );
  };
export default PodcastProximo;

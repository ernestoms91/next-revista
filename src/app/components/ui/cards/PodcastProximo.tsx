import React from "react";
import Image from "next/image";
interface Iprop {
  imagen: string;
  titulo: string;
}

const PodcastProximo = ({ imagen, titulo }: Iprop) => {
    return (
      <div className=" relative w-full h-full">
        {/* <Image
          src={imagen}
          alt="Picture of the author"
          className="rounded-t-3xl rounded-l-3xl h-full"
          objectFit="fill"
          width={1280}
          height={720}
          priority
        /> */}
                <Image
          src={imagen}
          alt="Picture of the author"
          className="rounded-t-3xl rounded-l-3xl h-full"
          objectFit="fill"
          width={1280}
          height={720}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white md:text-4xl">La próxima semana</h1>
            <p className="text-azul-oscuro line-clamp-2 md:text-4xl md:text-white">{titulo}</p>
          </div>
        </div>
      </div>
    );
  };
export default PodcastProximo;

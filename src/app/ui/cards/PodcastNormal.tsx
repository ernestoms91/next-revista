import { verificarFecha } from "@/app/lib/helpers/verificarFecha";
import Image from "next/image";

interface Iprop {
  titulo: string;
  imagen: string;
  descripcion: string;
  fecha: string;
  duracion: number;
}

const PodcastNormal = ({ titulo, imagen, descripcion, duracion, fecha }: Iprop) => {
  return (
    <div className="flex justify-center items-center rounded-l-3xl rounded-t-3xl bg-white">
      <div className="w-1/3">
        <div className="  relative w-full">
          <Image
            src={imagen}
            alt={`Picture of the author`}
            className="rounded-t-3xl rounded-l-3xl "
            objectFit="cover"
            width={1280}
            height={720}
            priority
          />
          <div className="absolute bottom-[40%] right-[40%]">
            <Image
              src="/micro.svg"
              alt="Search Logo"
              width={25}
              height={40}
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-1">
        <h1 className="font-bold text-base text-left line-clamp-2">{titulo}</h1>
        <div className="flex justify-between">
          <p className=" text-xs">{verificarFecha(fecha)}</p>
          <p className=" text-xs">
            {duracion} <span>min</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastNormal;

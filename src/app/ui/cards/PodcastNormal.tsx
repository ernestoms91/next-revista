import { verificarFecha } from "@/app/lib/helpers/verificarFecha";
import Image from "next/image";

interface Iprop {
  titulo: string;
  imagen: string;
  descripcion: string;
  fecha: string;
  duracion: number;
}

const PodcastNormal = ({
  titulo,
  imagen,
  descripcion,
  duracion,
  fecha,
}: Iprop) => {
  return (
    <div className="flex justify-center items-center rounded-l-3xl rounded-t-3xl bg-white md:bg-gris-claro">
      <div className="w-1/3 md:w-1/2">
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
          <div className="absolute bottom-[40%] right-[40%] md:bottom-4 md:left-3">
            <Image
              className="md:hidden"
              src="/micro.svg"
              alt="Search Logo"
              width={25}
              height={40}
              priority
            />
            <Image
              className="hidden md:block"
              src="/5.svg"
              alt="Search Logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-1 md:w-1/2 ">
        <h1 className="font-bold text-base text-left line-clamp-2 md:text-2xl ">{titulo}</h1>
        <div className="flex justify-between md:flex-row-reverse ">
          <p className=" text-xs md:text-base md:my-5  md:mx-5">{verificarFecha(fecha)}</p>
          <p className=" text-xs md:hidden">
            {duracion} <span>min</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PodcastNormal;

import { calcularTiempoLectura } from "@/app/lib/helpers/calcularTiempoLectura ";
import Image from "next/image";

interface Iprop {
  titulo: string;
  imagen: string;
  informacion: string;
  autor: string;
}

const ArticuloNormalCard = ({ titulo, imagen, informacion, autor }: Iprop) => {

  return (
    <div className="flex w-full rounded-l-3xl my-2 rounded-tr-3xl  bg-white md:bg-gris-claro  ">
      <div className="w-2/5">
        <div className="bg-gris-card  relative  rounded-l-3xl">
        <Image
          src={imagen}
          alt="Picture of the author"
          className="rounded-l-3xl  md:rounded-r-3xl  h-full"
          objectFit="fill"
          width={1280}
          height={720}
          priority
        />
                {/* <Image
          src={imagen}
          alt={`Picture of the author`}
          className="rounded-t-3xl "
          width={1280}
          height={366}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        /> */}

          <div className="absolute bottom-[40%] right-[40%] md:bottom-4 md:left-3 ">
            <Image
              className="hidden md:block"
              src="/4.svg"
              alt="Search Logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-gris-card rounded-tr-3xl p-2 w-3/5 grid">
        <h1 className="font-bold text-gris-oscuro text-2xl text-left line-clamp-3 my-2">
          {titulo}
        </h1>
        <div className="flex  justify-between items-center">
        <p className="text-xs md:text-sm my-2">
            Por <span className="font-gris-oscuro font-bold">{autor}</span>
          </p>
        <div>
          <div className="flex gap-1 items-center">
           
            <Image
              src="/clock.svg"
              alt="Search Logo"
              className="w-3 h-3"
              width={20}
              height={20}
              priority
            />
            <p className="text-xs md:text-sm ">{calcularTiempoLectura(informacion)} min </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticuloNormalCard;

import { calcularTiempoLectura } from "@/app/lib/helpers/calcularTiempoLectura ";
import Image from "next/image";

interface Iprop {
  titulo: string;
  imagen: string;
  informacion: string;
}

const ArticuloNormalCard = ({ titulo, imagen, informacion }: Iprop) => {

  console.log(informacion)
  return (
    <div className="flex w-full  h-60 rounded-l-3xl my-2 rounded-tr-3xl  bg-white md:bg-gris-claro md:my-8 ">
      <div>
        <div className="  relative w-full h-60 ">
        <Image
          src={imagen}
          alt="Picture of the author"
          className="rounded-l-3xl h-full"
          objectFit="fill"
          width={1280}
          height={720}
          priority
        />

          <div className="absolute bottom-[40%] right-[40%] md:bottom-4 md:left-3">
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

      <div className="bg-gris-card rounded-tr-3xl p-2">
        <h1 className="font-bold text-2xl text-left line-clamp-3 my-2">
          {titulo}
        </h1>
        <p className="line-clamp-3">{informacion}</p>
        <div className="flex flex-row-reverse">
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

export default ArticuloNormalCard;

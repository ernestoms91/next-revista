import Navbar from "@/app/components/ui/Navbar";
import AutorSlider from "@/app/components/about/AutorSlider";
import { newAuthorSchema } from "@/app/lib/helpers/yupSchemaAuthorForm";
import Image from "next/image";
import { CustomizedFooter } from "../components/ui/CustomizedFooter";
import { autores } from "../lib/autor-data";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <p className="text-4xl  text-center text-gris-oscuro">
          Somos una puerta de entrada al futuro de la educación. A través de
          múltiples medios, canales y formatos, dialogamos sobre sus desafíos
          actuales, proponemos soluciones prácticas y dibujamos el mañana. Somos
          una revista que se dirige a la comunidad educativa y a las familias
          para hablar de ciencia, pero lo hacemos como dos viejos conocidos.
          Desde aquí construimos nuevas formas de pensar y vivir la educación
          para adaptarnos a los cambios culturales de nuestro tiempo e impulsar
          la necesaria transformación de las escuelas.
        </p>
        <div className="p-2 border-2 border-l-0 border-r-0 border-gris-oscuro  my-2">
          <h1 className="text-5xl text-gris-oscuro my-4 mx-4">
            Equipo de realización{" "}
          </h1>
          <AutorSlider />
        </div>

        {/* Autores buqueda*/}
        <h1 className="text-5xl text-gris-oscuro my-4 mx-4">Autores</h1>
        <div className="flex ">
          <div className="rounded-lg rounded-r-none border-2 border-r-0 bg-gris-claro2">
            <Image
              src="/lupa.svg"
              alt="MOore Logo"
              width={47}
              height={34}
              priority
            />
          </div>
          <input
            className="w-full rounded-lg rounded-l-none border-2 border-l-0 bg-gris-claro2 focus:outline-none"
            placeholder="Busca lo que quieras"
          />
        </div>
        <div className="my-5 grid md:grid-cols-3 lg:grid-cols-4 justify-between gap-5">
          {
           autores.map( a =>( <div className={`rounded-lg `}>
            <Image
              src={a.imagen}
              alt={a.nombre}
              className="rounded-t-xl"
              width={275}
              height={275}
              priority
            />
            <div className="bg-gris-card w-[275px] px-2">
              <p className="text-xl font-bold text-gris-oscuro">
                {a.nombre}
              </p>
              <p className="text-base italic text-gris-oscuro">
                {a.cargo}
              </p>
            </div>
          </div>))
          }
          
        </div> 
      </div>
      <CustomizedFooter />
    </>
  );
}

import revistaApi from "@/app/lib/api/intranetApi";
import { calcularTiempoLectura } from "@/app/lib/helpers/calcularTiempoLectura ";
import parse from "html-react-parser";
import { author } from '../../../../lib/interfaces/author';
import { formatearFecha } from "@/app/lib/helpers/formatearFecha";

export default async function VerPage({ params }: { params: { id: string } }) {
  const { data } = await revistaApi.get(`publications/${params.id}`);

  return (
    <div className="grid justify-normal  ">
      <div className="p-10">
        <h1 className="text-center text-5xl font-bold text-gris-oscuro">{data.title}</h1>
        <div className="p-2 border-2 border-l-0 border-r-0 border-gris-oscuro  my-2">   
        <p className="text-28xl  text-center text-gris-oscuro">
        Para una efectiva recuperación de la información mediante búsquedas
            en Internet, los educadores deben poner en práctica cuatro
            importantes lecciones: 1) comprender las reglas del juego
            establecidas por Google y otros motores de búsqueda; 2) definir la
            estrategia de búsqueda; 3) aplicar operadores y refinar la
            estrategia de búsqueda; 4) adoptar una estrategia para la selección.
        </p>   
           <p className="text-center italic mt-2"> Tiempo de lectura {calcularTiempoLectura(data.content_html)} min</p>
        </div>
        {/* //TODO: Autor desde el backend */}
        <p className="italic text-lg text-center text-gris-oscuro">Por: <span className="font-semibold underline">Revista Educación, Magdalena Rodríguez, Diosvany Ortega</span> <span className="mx-4">{formatearFecha(data.created_at)}</span> </p>
        {/* <Image src={data.image} alt={data.title} width={200} height={200} /> */}
        <div className="text-xl my-4 space-y-6">
        {parse(data.content_html)}
        </div>
    
      </div>
    </div>
  );
}

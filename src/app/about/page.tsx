import Navbar from "../ui/Navbar";
import AutorSlider from './AutorSlider';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="p-10">
      <p className="text-4xl  text-center text-gris-oscuro">
        Somos una puerta de entrada al futuro de la educación. A través de
        múltiples medios, canales y formatos, dialogamos sobre sus desafíos
        actuales, proponemos soluciones prácticas y dibujamos el mañana. Somos
        una revista que se dirige a la comunidad educativa y a las familias para
        hablar de ciencia, pero lo hacemos como dos viejos conocidos. Desde aquí
        construimos nuevas formas de pensar y vivir la educación para adaptarnos
        a los cambios culturales de nuestro tiempo e impulsar la necesaria
        transformación de las escuelas.
        </p>
       <div className="p-2 border-2 border-l-0 border-r-0 border-gris-oscuro  my-2">
        <h1 className="text-5xl text-gris-oscuro my-4">Equipo de realización </h1>
        <AutorSlider />

        </div> 
      </div>
    </>
  );
}

import Image from "next/image"

interface Iprop {
    titulo: string;
    imagen: string;
    descripcion: string;
    duracion: number;
  }

const Publicidad = () => {
  return (
    <div className="relative w-full">
    <Image
      src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Picture of the author"
      className="rounded-t-3xl rounded-l-3xl"
      objectFit="cover"
      width={1280}
      height={720}
      priority
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="">
        <h1 className="text-white text-3xl font-bold">Imprenta</h1>
        <h1 className="text-azul-oscuro text-3xl font-bold">pueblo y educación</h1>
        <p className="text-white text-center my-8 line-clamp-2 uppercase">descuentos hasta 50%</p>
      </div>
    </div>
  </div>
  )
}

export default Publicidad
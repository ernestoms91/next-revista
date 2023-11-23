import Image from "next/image";
import Link from "next/link";
import { otros, publicidad, secciones } from "@/app/lib/footer-data";

const Footer = () => {
  return (
    <footer className="bg-gris-oscuro py-5 px-5">
      <div className="flex items-center justify-center ">
        <Image src="/capa1.svg" alt="Logo" width={250} height={40} priority />
      </div>
      <div className="flex py-5 justify-between">
        <Image src="/facebook.svg" alt="Logo" width={50} height={20} priority />
        <Image src="/twitter.svg" alt="Logo" width={50} height={20} priority />
        <Image src="/in.svg" alt="Logo" width={50} height={20} priority />
        <Image src="/youtube.svg" alt="Logo" width={50} height={20} priority />
      </div>
      <div className="md:hidden">
        <h1 className=" text-xl  text-white ">Secciones</h1>
        <div className="grid grid-cols-3  justify-center md:grid-cols-none">
          {secciones.map((s, i) => {
            return (
              <Link
                className={`text-gray-300 text-lg my-2
                ${
                (i + 1) % 3 === 0 ? "text-right" :
                i + 1  === 2 ? "text-center" :
                i + 1  === 5 ? "text-center" :
                "text-left"} 
                ${i === 0 && 'text-left' ? i === 2 && 'text-right' : 'text-center'} 
                `}
                key={s.name}
                href={s.href}
              >
                {s.name}
              </Link>
            );
          })}
        </div>
        <div className="flex my-5 gap-3">
          <div>
            <h1 className=" text-xl  text-white">Publicidad</h1>
            {publicidad.map((p) => {
              return (
                <Link
                  className="text-gray-300 text-lg  my-4 block "
                  key={p.name}
                  href={p.href}
                >
                  {p.name}
                </Link>
              );
            })}
          </div>
          <div>
            <h1 className=" text-xl  text-white">Otros</h1>
            {otros.map((o, i) => {
              return (
                <Link
                  className={`text-gray-300 text-lg block ${
                    otros.length - 1 !== i ? "my-4" : ""
                  }   `}
                  key={o.name}
                  href={o.href}
                >
                  {o.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex gap-x-4">
        <Image
          src="/editorialpueblo.svg"
          className="mb-1"
          alt="Logo"
          width={100}
          height={20}
          priority
        />

        <h1 className=" flex mx-4 items-end  font-semibold text-lg  text-gray-300">
          Una revista de
          <br />
          Editorial Pueblo y Educación
        </h1>
      </div>

        <p className="text-xs my-4 text-gray-300 md:text-right md:text-sm">
          © 2023 Editorial Pueblo y Educación.Todos los derechos reservados
        </p>
    </footer>
  );
};

export default Footer;

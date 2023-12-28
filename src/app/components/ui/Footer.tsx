import Image from "next/image";
import Link from "next/link";
import { otros, publicidad, secciones } from "@/app/lib/footer-data";

const Footer = () => {
  return (
    <footer className="bg-gris-oscuro py-5 px-5 ">
      <div className="md:px-20 md:py-10 md:grid md:grid-cols-3 md:grid-rows-2">
      {/* */}
      <div className="">
        <div className="flex items-center justify-center md:justify-start ">
          <Image
            className="md:hidden"
            src="/capa1.svg"
            alt="Logo"
            width={250}
            height={40}
            priority
          />
          <Image
            className="hidden md:block"
            src="/logotipo.svg"
            alt="Logo"
            width={250}
            height={40}
            priority
          />
        </div>
        <div className="flex py-5 justify-between md:justify-normal md:gap-10">
          <Image
            src="/facebook.svg"
            alt="Logo"
            width={50}
            height={20}
            priority
          />
          <Image
            src="/twitter.svg"
            alt="Logo"
            width={50}
            height={20}
            priority
          />
          <Image src="/in.svg" alt="Logo" width={50} height={20} priority />
          <Image
            src="/youtube.svg"
            alt="Logo"
            width={50}
            height={20}
            priority
          />
        </div>
      </div>
      <div className="md:col-span-2 md:row-span-2 md:flex">
        <h1 className=" text-xl  text-white md:hidden ">Secciones</h1>
        <div className="grid grid-cols-3  justify-center md:grid-cols-none  md:mx-20">
          <h1 className=" text-xl  text-white hidden md:block">Secciones</h1>
          {secciones.map((s, i) => {
            return (
              <Link
                className={`text-gray-300 text-lg my-2 
                ${
                  (i + 1) % 3 === 0
                    ? "text-right"
                    : i + 1 === 2
                    ? "text-center"
                    : i + 1 === 5
                    ? "text-center"
                    : "text-left"
                } 
                md:text-left md:my-2`}
                key={s.name}
                href={s.href}
              >
                {s.name}
              </Link>
            );
          })}
        </div>
        <div className="flex my-5 gap-3 md:my-0">
          <div className="md:order-last md:ml-10">
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
          <div className="md:ml-20">
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
          className="mb-1 md:mb-0"
          alt="Logo"
          width={100}
          height={20}
          priority
        />

        <h1 className=" flex mx-4 items-end  font-semibold text-lg  text-gray-300 md:font-normal md:mb-7">
          Una revista de
          <br />
          Editorial Pueblo y Educación
        </h1>
      </div>
</div>
      <p className="text-xs my-4 text-gray-300 md:text-right md:text-sm md:col-span-3 md:my-0">
        © 2023 Editorial Pueblo y Educación.Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;

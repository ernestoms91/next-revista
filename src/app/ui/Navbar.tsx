"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  escolaridad,
  otrosNav,
  redes,
  secciones,
  seccionesDesktop,
} from "../lib/footer-data";
import libro from "../../../public/202.svg";

const otros = ["Sobre nosotros", "Para autores"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<boolean>(false);

  const ListaSeccionesMobile = () => (
    <>
      <h1 className="capitalize p-4 font-bold md:text-2xl">Secciones</h1>
      <div className="block md:hidden">
        {secciones &&
          secciones.map((s, i) => {
            if (s.name === "Videoblog") {
              return (
                <div key={i} className="capitalize border-t-2 mx-5 p-4 flex">
                  <Image
                    src="/videoblog.svg"
                    className=""
                    alt="Logo"
                    width={20}
                    height={20}
                    priority
                  />
                  <Link href={`/${s.href}`}>{s.name}</Link>
                </div>
              );
            }

            if (s.name === "Podcast") {
              return (
                <div key={i} className="capitalize border-t-2 mx-5 p-4 flex">
                  <Image
                    src="/podcastazul.svg"
                    className=""
                    alt="Logo"
                    width={20}
                    height={20}
                    priority
                  />
                  <Link href={`/${s.href}`}>{s.name}</Link>
                </div>
              );
            } else {
              return (
                <div key={i} className="capitalize border-t-2 mx-2 p-4 ">
                  <Link href={`/${s.href}`}>{s.name}</Link>
                </div>
              );
            }
          })}
      </div>
      <div className="hidden md:grid md:grid-cols-2 md:gap-x-40">
        {seccionesDesktop &&
          seccionesDesktop.map((s, i) => (
            <div
              key={i}
              className={`capitalize  mx-5 ${
                i == 2 || i == 3 ? "border-t-2 border-b-2" : ""
              } p-4 flex`}
            >
              <Image
                src={s.src}
                className=""
                alt="Logo"
                width={40}
                height={40}
                priority
              />
              <Link className="text-xl mt-3 mx-2" href={`/${s.href}`}>
                {s.name}
              </Link>
            </div>
          ))}
      </div>
    </>
  );

  const TipoEducacion = () => (
    <>
      <h1 className="capitalize p-4 font-bold md:hidden ">Tipo de Educación</h1>
      <div className="block md:hidden ">
        {escolaridad &&
          escolaridad.map((e, i) => (
            <div key={i} className="capitalize border-t-2 mx-2 p-4 ">
              <Link href={`/${e.href}`}>{e.name}</Link>
            </div>
          ))}
      </div>
    </>
  );

  const Otros = () => (
    <div className="md:grid md:grid-cols-2 gap-x-40 md:my-5 md:mx-4">
      <div>
        <div className="flex py-2 bg-gris-claro3 rounded-xl rounded-br-none mt-10 shadow-md md:mt-0">
          <Image src={libro} className="mx-3" alt="Logo" priority />
          <p className="mt-2">Catálogo editorial</p>
        </div>
        <div className=" my-8 hidden md:flex md:gap-x-16 lg:gap-x-30">
          {redes &&
            redes.map((r) => (
              <div className="flex justify-center items-center">
                <Link href={`/${r.name}`}>
                  <Image
                    src={r.href}
                    className=""
                    alt="Redes"
                    width={30}
                    height={30}
                    priority
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div>
        {otrosNav &&
          otrosNav.map((o, i) => (
            <div
              key={i}
              className={`capitalize  mx-2 p-4 ${i == 0 ? "border-b-2" : ""} `}
            >
              <Link className="md:text-xl" href={`/${o.href}`}>
                {o.name}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <nav className="relative">
      <div className="my-5 flex justify-center gap-x-10">
        <div className="flex sm:gap-10 md:flex-row-reverse md:gap-20 lg:gap-40">
          <button onClick={() => setOpen(false)}>
            <Image
              src="/lupa.svg"
              alt="Search Logo"
              width={80}
              height={40}
              priority
            />
          </button>
          <Image src="/logo.svg" alt="Logo" width={300} height={40} priority />

          <button className="block" onClick={() => setOpen(!open)}>
            <Image
              src="/more.svg"
              alt="MOore Logo"
              width={80}
              height={40}
              priority
            />
          </button>
        </div>
      </div>
      <div className=" hidden md:flex flex-wrap justify-center gap-4 ">
        {secciones &&
          secciones.map((s) => (
            <button className="bg-white  border-2 px-8  border-azul-claro text-azul-claro font-bold rounded-l-full rounded-t-full text-lg ">
              <Link href={s.href}>
              {s.name}
              </Link>
 
            </button>
          ))}
      </div>

      <div
        className={`  sticky  z-10 w-full  bg-white  mx-6 ${
          open ? "" : "hidden"
        }`}
      >
        <ListaSeccionesMobile />
        <TipoEducacion />
        <Otros />
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { escolaridad, otrosNav, secciones } from "../lib/footer-data";
import libro from '../../../public/202.svg'

const otros = ["Sobre nosotros", "Para autores"];



const Navbar = () => {


  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<boolean>(false);

  const ListaSecciones = () => (
    <>
      <h1 className="capitalize p-4 font-bold">Secciones</h1>
      <div className="block md:grid md:grid-cols-2 md:gap-x-40">
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
    </>
  );

  const TipoEducacion = () => (
    <>
      <h1 className="capitalize p-4 font-bold ">Tipo de Educación</h1>
      <div className="block md:grid md:grid-cols-2 md:gap-x-40">
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
    <>
      <div className="flex py-2 bg-gris-claro3 rounded-xl rounded-br-none mt-10 shadow-md">
        <Image
          src={libro}
          className="mx-3"
          alt="Logo"
          priority
        />
        <p className="mt-2">Catálogo editorial</p>
      </div>
      <div>
        {otrosNav &&
          otrosNav.map((o, i) => (
            <div key={i} className="capitalize  mx-2 p-4 ">
              <Link href={`/${o.href}`}>{o.name}</Link>
            </div>
          ))}
      </div>
    </>
  );

  return (
    <nav className="relative">
      <div className="my-5">
        <div className="flex justify-between ">
          <button>
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

      <div className={`  sticky  z-10 w-full  bg-white  mx-6 ${open ? "" : "hidden"}`}>
        <ListaSecciones />
        <TipoEducacion />
        <Otros />
      </div>
    </nav>
  );
};

export default Navbar;

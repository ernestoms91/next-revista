"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoPeopleSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Author",  icon:  <IoPeopleSharp size={50} color="bg-azul-oscuro" /> , link : "/admin/autores"},
    { title: "Usuarios", icon: <TfiWrite size={45} color="bg-azul-oscuro" />, link :"/admin/usuarios" },
  ];

  return (
    <div className="flex rounded-r-xl">
      <div
        className={` ${
          open ? "w-50" : "w-20 "
        } h-full md:h-screen p-5  pt-8 relative duration-300 bg-azul-claro  rounded-r-xl`}
      >
        <button
          className={`absolute cursor-pointer -right-3 border-azul-claro top-9 
           border-2 rounded-full  ${!open && "rotate-180"} bg-white`}
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
        <div className="flex gap-x-4 items-center">
        <Image src="/editorialpueblo.svg" className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`} alt="Logo" width={100} height={40} priority />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1> */}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link href={Menu.link}>
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${"mt-2"} ${
              // ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
               {Menu.icon}
              <p  className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </p>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

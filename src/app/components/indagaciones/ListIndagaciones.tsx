"use client";
import { article } from "@/app/lib/interfaces/article";
import React from "react";
import ArticuloNormalCard from "../ui/cards/ArticuloNormalCard";
import ArticuloCard from "../ui/cards/ArticuloCard";
import { author } from "@/app/lib/interfaces/author";
import Image from "next/image";

interface Iprop {
  indagaciones: Array<article>;
}
const ListIndagaciones = ({ indagaciones }: Iprop) => {
  return (
    <div className="mx-5">
      <div className="py-5 md:py-10">
      <div className="flex items-center gap-2 ">
        <Image
          src="/indagaciones.svg"
          alt="Search Logo"
          className="w-5 h-5 md:w-[60px] md:h-[60px]"
          width={20}
          height={20}
          priority
        />
        <h1 className="text-2xl md:text-5xl text-gris-oscuro font-bold ">
          Indagaciones
        </h1>
      </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 justify-center ">
        {indagaciones.map((ind, i) =>
          i < 10 ? (
            <ArticuloCard
              imagen={`http://localhost:9000/media/6.jpg`}
              titulo={ind.title}
              enunciado={ind.summary}
              informacion={ind.content}
              key={ind.id}
              autor={
                ind.authors[0].first_name + " " + ind.authors[0].first_lastname
              }
            />
          ) : (
            <ArticuloNormalCard
              imagen={`http://localhost:9000/media/6.jpg`}
              titulo={ind.title}
              // enunciado={ind.summary}
              informacion={ind.summary}
              key={ind.id}
              autor={
                ind.authors[0].first_name + " " + ind.authors[0].first_lastname
              }
            />
          )
        )}
      </div>
      <h1 className="hidden md:block lg:hidden">MD</h1>
    </div>
  );
};

export default ListIndagaciones;

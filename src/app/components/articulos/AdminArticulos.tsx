'use client'

import revistaApi from "@/app/lib/api/intranetApi";
import { article } from "@/app/lib/interfaces/article";
import Edit from "@/app/components/ui/Edit"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import Ver from "@/app/components/ui/Ver";

const AdminArticulos = () => {
  const router = useRouter()

  const [articles, setArticles] = useState<Array<article>>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getArticles = async () => {
    try {
      const { data } = await revistaApi.get(`standard_publications`);
      setArticles(data.items);
      setTotalPages(data.pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, [page]);


  return (
    <div className="w-full mt-5 overflow-x-auto">
    <h1 className="text-3xl my-2 text-center"> Gestionar articulos</h1>
    <div className=" overflow-x-auto rounded-lg mx-2 my-5 ">
      <table className="w-full border-2 rounded-lg shadow mx-2  overflow-x-auto">
        <thead className="bg-blue-300 border-b-2 border-x-azul-oscuro overflow-x-auto">
          <tr>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              No.
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
             Titulo
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Autores
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Fecha de creación
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Sección
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Editar
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Ver
            </th>
          </tr>
        </thead>
        <tbody className="divide-y overflow-x-auto">
          {articles &&
            articles.length > 0 &&
            articles.map((art: article, index) => (
              <tr
                className={index % 2 === 0 ? "bg-white" : "bg-blue-100"}
                key={index}
              >
                <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                  {index + 1}.
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                  {art.title}
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                  {art.authors[0].first_name + "  " + art.authors[0].first_lastname}
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                  {art.created_at}
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                  {art.section.name}
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    <button
                      onClick={() => {
                        console.log("Editando")
                      }}
                    >
                      <Edit />
                    </button>
                  </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    <button
                      onClick={() => 
                    router.push(`articulos/ver/${art.id}`)
                      }
                    >
                      <Ver />
                    </button>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    <div className="mx-4 flex justify-center">
      <div className="p-3 flex justify-between gap-8">
        <button
          className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <p className="my-2 font-bold">{`${page} - ${totalPages}`}</p>
        <button
          className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-r"
          disabled={page === totalPages ? true : false}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  </div>
  )
}

export default AdminArticulos
"use client";

import revistaApi from "@/app/lib/api/intranetApi";
import Edit from "@/app/components/ui/Edit";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Ver from "@/app/components/ui/Ver";
import Link from "next/link";
import { interview } from "@/app/lib/interfaces/interview";

const AdminInterviews = () => {
  const router = useRouter();

  const [interviews, setInterviews ] = useState<Array<interview>>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getInterviews = async () => {
    try {
      const { data } = await revistaApi.get(`interviews?page=${page}&size=50`);
      setInterviews(data.items);
      setTotalPages(data.pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInterviews();
  }, [page]);

  return (
    <div className="w-full mt-5 overflow-x-auto">
      <h1 className="text-3xl my-2 text-center"> Gestionar entrevistas</h1>
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
                Entrevistador
              </th>
              <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
                Entrevistado
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
            {interviews &&
              interviews .length > 0 &&
              interviews .map((int: interview, index) => (
                <tr
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-100"}
                  key={index}
                >
                  <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                    {index + 1}.
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                    {int.title}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                    {int.interviewee}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                    {int.interviewer}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                    {int.created_at}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                    {int.section.name}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600">
                  <Link href={`entrevistas/editar/${int.id}`} target="_blank">
                      <Edit />
                    </Link>
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    <Link href={`entrevistas/ver/${int.id}`} target="_blank">
                      <Ver />
                    </Link>
                    {/* <button
                      onClick={() => 
                    router.push(`inticulos/ver/${int.id}`)
                      }
                    >
                      <Ver />
                    </button> */}
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
  );
};

export default AdminInterviews;

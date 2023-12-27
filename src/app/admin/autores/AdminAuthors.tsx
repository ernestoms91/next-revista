'use client'

import revistaApi from "@/app/lib/api/intranetApi";
import { author } from "@/app/lib/interfaces/author";
import Disable from "@/app/ui/Disable";
import Edit from "@/app/ui/Edit";
import Enable from "@/app/ui/Enable";
import { useEffect, useState } from "react";
import AddAuthor from "./AddAuthor";
import { calcularTotalPaginas } from "@/app/lib/helpers/calcularTotalPaginas";


const AdminAuthors = () => {

    const [authors, setAuthors] = useState<Array<author>>([]);
    const [authorEdit, setAuthorEdit] = useState<author>()
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
  
    const getAuthor = async () => {
      try {
  
       const {data} = await revistaApi.get(`authors?sort=first_name&page=${page}&size=10`)
      setAuthors(data.items)
      setTotalPages(data.pages)
    } catch (error) {
  console.log(error)
    }
    }
    
    const handleDisable = async (id: string)=>{
      const {data} = await revistaApi.delete(`authors/${id}`)
      let authorsUpdated =authors.map(author=>{
        if(author.id === parseInt(id)){
          return {
            ...author,
            hidden: !author.hidden
          }
        }
        return author
      }
      )}
  
  
  
    useEffect(() => {
      getAuthor();
    }, [page]);
  

  return (

    <div className="w-full mt-5 overflow-x-auto">
    <h1 className="text-3xl my-2 text-center"> Gestionar autores</h1>
   
    <div className=" overflow-x-auto rounded-lg mx-2 my-5 ">
  
    <AddAuthor authors={authors} setAuthors={setAuthors} authorEdit={authorEdit} setAuthorEdit={setAuthorEdit} page={page}/>
      <table className="w-full border-2 rounded-lg shadow mx-2  overflow-x-auto">
        <thead className="bg-blue-300 border-b-2 border-x-azul-oscuro overflow-x-auto">
          <tr>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              No.
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Nombre
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Apellido
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
            Apellido
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Habilitar
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Editar
            </th>
          </tr>
        </thead>
        <tbody className="divide-y overflow-x-auto">
          {authors &&
            authors.length > 0 &&
            authors.map((author: author, index) => (
              <tr
                className={index % 2 === 0 ? "bg-white" : "bg-blue-100"}
                key={author.id}
              >
                <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                  {index + 1}.
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600">
                  {author.first_name}
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600">
                  {author.first_lastname}
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600">
                  {author.second_lastname}
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600">
                  <button onClick={() => {handleDisable(author.id.toString())}}>
                    {author.hidden ? <Disable /> : <Enable />}
                  </button>
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600">
                  <button 
                  onClick={()=>setAuthorEdit(author)}>
                  <Edit />
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
          disabled={page === totalPages  ? true : false}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>

  </div>
  )
}

export default AdminAuthors
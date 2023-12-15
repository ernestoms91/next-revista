'use client'

import revistaApi from "@/app/lib/api/intranetApi";
import { author } from "@/app/lib/interfaces/author";
import Disable from "@/app/ui/Disable";
import Edit from "@/app/ui/Edit";
import Enable from "@/app/ui/Enable";
import { useEffect, useState } from "react";
import AddAuthor from "./AddAuthor";


const AdminAuthors = () => {

    const [authors, setAuthors] = useState<Array<author>>([]);
    const [authorEdit, setAuthorEdit] = useState<author>()
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
  
    const getAuthor = async () => {
      try {
  
        const {data} = await revistaApi.get(`authors?page=${page}&size=10&sort=first_name,asc`)
      setAuthors(data)
    } catch (error) {
  console.log(error)
    }
    }
    
  

  
    const disabeAuthor = async (id: string) => {
      // try {
      //   const res = await fetch(
      //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/delete/${id}`,
      //     {
      //       method: "DELETE",
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: `Bearer ${session?.user?.jwt}`,
      //       },
      //     }
      //   );
  
      //   const data = await res.json();
      //   if (res.ok) {
      //     toast.success("Usuario actualizado");
      //   }else{
      //     console.log(data);
      //     return toast.error(data.msg);
      //   }
      //   const updatedUsers = users.map((user) => {
      //     if (user.id === id) {
      //       return {
      //         ...user,
      //         disable: !user.disable,
      //       };
      //     } else {
      //       return user;
      //     }
      //   });
      //   console.log(updatedUsers);
      //   setUsers(updatedUsers);
      // } catch (error: any) {
      //   toast.error(error.msg);
      //   console.error(error);
      //   throw error;
      // }
    }
  
    useEffect(() => {
      getAuthor();
    }, [page]);
  


  return (

    <div className="w-full mt-5">
    <h1 className="text-3xl my-2 text-center"> Gestionar autores</h1>
    {/* <AddUser  userEdit={userEdit} setUserEdit={setUserEdit} users={users} setUsers={setUsers}/> */}
    <AddAuthor authors={authors} setAuthors={setAuthors}/>
    <div className="flex justify-center overflow-auto rounded-lg mx-2 my-5 ">
      <table className="w-full border-2 rounded-lg shadow mx-2">
        <thead className="bg-blue-300 border-b-2 border-x-azul-oscuro">
          <tr>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              No.
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Nombre
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Apellido 1
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
            Apellido 2
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Habilitar
            </th>
            <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
              Editar
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
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
                  <button onClick={() => {console.log("Tumbado")}}>
                    {author.second_name ? <Disable /> : <Enable />}
                  </button>
                </td>
                <td className="p-3 text-base whitespace-nowrap text-gray-600">
                  <button 
                  onClick={()=>{console.log("editando")}}>
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
          disabled={page === 0 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <p className="my-2 font-bold">{`${page + 1} - ${totalPages}`}</p>
        <button
          className="bg-blue-300 hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-r"
          disabled={page === totalPages - 1 ? true : false}
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
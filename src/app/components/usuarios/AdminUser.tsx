"use client";

import revistaApi from "@/app/lib/api/intranetApi";
import Disable from "@/app/components/ui/Disable";
import Edit from "@/app/components/ui/Edit";
import Enable from "@/app/components/ui/Enable";
import { useEffect, useState } from "react";
import { user } from "@/app/lib/interfaces/users";
import AddUser from "./AddUser";
import { useSession } from "next-auth/react";

const AdminUser = () => {
  const [users, setUsers] = useState<Array<user>>([]);
  const [userEdit, setUserEdit] = useState<user>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getUsers = async () => {
    try {
      const { data } = await revistaApi.get(
        `users?sort=first_name&page=${page}&size=10`
      );
      setUsers(data.items);
      setTotalPages(data.pages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisable = async (id: number, active: boolean) => {
    const { data } = await revistaApi.put(
      `users/${id}/enable?value=${!active}`
    );
    console.log(data);
    let usersUpdated = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          active: !active,
        };
      }
      return user;
    });
    setUsers(usersUpdated);
  };

  useEffect(() => {
    getUsers();
  }, [page]);
  
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full mt-5 overflow-x-auto">
      <h1 className="text-3xl my-2 text-center"> Gestionar usuarios</h1>
      <div className=" overflow-x-auto rounded-lg mx-2 my-5 ">
        <AddUser
          users={users}
          setUsers={setUsers}
          userEdit={userEdit}
          setUserEdit={setUserEdit}
          page={page}
        />
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
                Telf
              </th>
              <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
                Usuario
              </th>
              <th className="p-3 text-lg font-semibold whitespace-nowrap tracking-wide text-left">
                Email
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
            {users &&
              users.length > 0 &&
              users.map((user: user, index) => (
                <tr
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-100"}
                  key={index}
                >
                  <td className="p-3 text-base whitespace-nowrap text-gray-600 font-semibold">
                    {index + 1}.
                  </td>

                  <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    {user.first_name}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    {user.first_lastname}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    {user.phone_number}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    {user.username}
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600 flex">
                    {user.email}
                  </td>

                  <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    <button
                      onClick={() => {
                        handleDisable(user.id, user.active);
                      }}
                    >
                      {user.active ? <Disable /> : <Enable />}
                    </button>
                  </td>
                  <td className="p-3 text-base whitespace-nowrap text-gray-600">
                    <button
                      onClick={() => {
                        setUserEdit(user);
                      }}
                    >
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

export default AdminUser;

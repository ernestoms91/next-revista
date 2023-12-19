"use client";
import { Formik, FormikHelpers } from "formik";
import { MyTextInput } from "../../ui/Form/MyTextInput";
import revistaApi from "@/app/lib/api/intranetApi";
import { Dispatch, SetStateAction } from "react";
import { user } from "@/app/lib/interfaces/users";
import { MySelect } from "@/app/ui/Form/MySelect";
import { editUserSchema, newUserSchema } from "@/app/lib/helpers/yupSchemaUserForm";


interface Iprop {
  users: user[];
  setUsers: Dispatch<SetStateAction<user[]>>;
  userEdit: user | undefined;
  setUserEdit: Dispatch<SetStateAction<user | undefined>>;
  page: number;
}



interface MyFormValues {
  first_name: string;
  middle_name: string;
  first_lastname: string;
  second_lastname: string;
  educational_level: string;
  phone_number: string;
  role: string;
  password: string;
  password2: string;
  username: string;
  email: string;
}


const educationalLevels: string[] = [
  "Doctorate Degree",
  "Master's Degree",
  "Bachelor's Degree",
  "Assousernameate Degree",
  "High School Diploma",
  "Some High School",
  "No Formal Education"
];

const roles: string[] = [
  "normal",
  "editor",
];


const initialValues: MyFormValues = {
  first_name: "",
  middle_name: "",
  first_lastname: "",
  second_lastname: "",
  educational_level: "",
  phone_number: "",
  role: "",
  password: "",
  password2: "",
  username:"",
  email:""
};

const AddUser = ({
  users,
  setUsers,
  userEdit,
  setUserEdit,
  page
}: Iprop) => {


  const handleNewUser = async (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>
  ) => {
    try {
      console.log(values)
      //TODO: Falta los campos active y avatar
      const { data } = await revistaApi.post(`users`, {...values, 'active': true, "avatar": "http....",});
      const {data:data2} = await revistaApi.get(`users?sort=first_name&page=${page}&size=10`)
      setUsers(data2.items)
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditUser = async (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>
  ) => {
    try {
      console.log(values)
      //TODO: Arreglar password y avatar en el backend
      const { data } = await revistaApi.put(`users/${userEdit?.username}`, {
        ...values,
        "password": "Cuba2023***",
        "avatar": "http...."
      });
      const {data:data2} = await revistaApi.get(`users?sort=first_name&page=${page}&size=10`)
      setUsers(data2.items)
      setUserEdit(undefined);
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }

  };

  const userEditinitialValues = () => {

    let userEditinitialValues: MyFormValues = {
      first_name: userEdit?.first_name as string,
      middle_name: userEdit?.middle_name as string,
      first_lastname: userEdit?.first_lastname as string,
      second_lastname: userEdit?.second_lastname as string,
      educational_level: userEdit?.educational_level as string,
      phone_number: userEdit?.phone_number as string,
      role: userEdit?.role as string,
      password: "",
      password2: "",
      username: userEdit?.username as string,
      email:userEdit?.email as string
    };
    return userEditinitialValues;
  };

  return (
    <div className="grid grid-cols-1">
      <Formik
        initialValues={userEdit ? userEditinitialValues() : initialValues}
        validationSchema={userEdit ? editUserSchema : newUserSchema}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          userEdit
            ? handleEditUser(values, actions)
            : handleNewUser(values, actions);
        }}
      >
        {({
          values,
          errors,
          setFieldValue,
          setTouched,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            className=" grid p-2 w-full mx-2 md:grid-cols-2 lg:grid-cols-6 gap-2 "
            onSubmit={handleSubmit}
          >
            {/* Añadir first_name*/}
            <div>
              <MyTextInput
                name="first_name"
                classNameLabel="font-bold text-lg  block"
                label="Añadir nombre"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.first_name && touched.first_name
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el nombre  "
              />
            </div>

            {/* Añadir middle_name */}
            <div>
              <MyTextInput
                name="middle_name"
                classNameLabel="font-bold text-lg  block"
                label="Añadir  nombre"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.middle_name && touched.middle_name
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el segundo nombre  "
              />
            </div>
            {/* Añadir first_lastname */}
            <div>
              <MyTextInput
                name="first_lastname"
                classNameLabel="font-bold text-lg  block"
                label="Añadir apellido"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.first_lastname && touched.first_lastname
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el  apellido"
              />
            </div>

            {/* Añadir second_lastname */}
            <div>
              <MyTextInput
                name="second_lastname"
                classNameLabel="font-bold text-lg  block"
                label="Añadir  apellido"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.second_lastname && touched.second_lastname
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el  apellido"
              />
            </div>

            {/* Añadir username */}
            <div>
              <MyTextInput
                name="username"
                classNameLabel="font-bold text-lg  block"
                label="Añadir  usuario"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.username && touched.username
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba su usuario"
              />
            </div>

            {/* Añadir email */}
            <div>
              <MyTextInput
                name="email"
                classNameLabel="font-bold text-lg  block"
                label="Añadir  email"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.email && touched.email
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba su email"
              />
            </div>

            {/* Añadir phone_number */}
            <div>
              <MyTextInput
                name="phone_number"
                classNameLabel="font-bold text-lg  block"
                label="Añadir  teléfono"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.phone_number && touched.phone_number
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el  teléfono"
              />
            </div>

            {/* Añadir educational_level */}
            <div>
              <MySelect
                     name="educational_level"
                     classNameLabel="font-bold text-lg  block"
                     label="Añadir  nivel"
                classNameSelect={`bg-gris-claro block p-2   rounded-t-lg w-full border-2 ${
                  errors.educational_level && touched.educational_level
                    ? "border-rose-600"
                    : ""
                }`}
              >
                <option value="">Seleccione</option>

                {educationalLevels.map((rol, index) => (
                  <option key={index} value={rol}>
                    {rol}
                  </option>
                ))}
              </MySelect>
            </div>

            {/* Añadir role */}
            <div>
              <MySelect
                     name="role"
                     classNameLabel="font-bold text-lg  block"
                     label="Añadir  rol"
                classNameSelect={`bg-gris-claro block p-2   rounded-t-lg w-full border-2 ${
                  errors.role && touched.role
                    ? "border-rose-600"
                    : ""
                }`}
              >
                <option value="">Seleccione</option>

                {roles.map((rol, index) => (
                  <option key={index} value={rol}>
                    {rol}
                  </option>
                ))}
              </MySelect>
            </div>
           
                       {/* Añadir password */}
                       <div>
              <MyTextInput
                name="password"
                type="password"
                classNameLabel="font-bold text-lg  block  whitespace-nowrap"
                label="Añadir  contraseña "
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.password && touched.password
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba una contraseña segura"
              />
            </div>

                       {/* Añadir password2 */}
                       <div>
              <MyTextInput
                name="password2"
                type="password"
                classNameLabel="font-bold text-lg  block  whitespace-nowrap"
                label="Repita  contraseña"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.password2 && touched.password2
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Repita su contraseña"
              />
            </div>


            {/*Botones salvar y publicar*/}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className=" w-full bg-azul-claro rounded-lg text-lg text-white p-2 mt-6  "
              >
              {userEdit ? "Editar" : "Guardar"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;

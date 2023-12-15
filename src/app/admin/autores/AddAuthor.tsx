"use client";
import { Formik, FormikHelpers } from "formik";
import Image from "next/image";
import { MyTextInput } from "../../ui/Form/MyTextInput";
import { newAuthorSchema } from "@/app/lib/helpers/yupSchemaAuthorForm";
import revistaApi from "@/app/lib/api/intranetApi";
import AdminAuthors from "./AdminAuthors";
import { author } from "@/app/lib/interfaces/author";
import { Dispatch, SetStateAction } from "react";

interface MyFormValues {
  first_name: string;
  second_name: string;
  first_lastname: string;
  second_lastname: string;
  social_media_handles: string | Array<string>;
}

interface Iprop{
    authors: author[];
    setAuthors: Dispatch<SetStateAction<author[]>>;
}

const initialValues: MyFormValues = {
  first_name: "",
  second_name: "",
  first_lastname: "",
  second_lastname: "",
  social_media_handles: "",
};

const AddAuthor = ({authors,setAuthors}:Iprop) => {

    const handleNewAuthor = async (values: MyFormValues, actions: FormikHelpers<MyFormValues>)=>{
        try {
            let { social_media_handles } = values;
            let socialToSend = social_media_handles;
            if (
              social_media_handles.includes(",") &&
              typeof social_media_handles === "string"
            ) {
              socialToSend = social_media_handles?.split(", ");
            } else {
              socialToSend = [social_media_handles as string];
            }
            console.log(values);

            const { data } = await revistaApi.post(`authors`, {
              ...values,
              social_media_handles: socialToSend,
            });
            setAuthors([...authors, {
                ...values,
                id:5,
                social_media_handles: socialToSend,
              } ]);
            console.log(data);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
    }


  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={newAuthorSchema}
        enableReinitialize={true}
        onSubmit={async (values, actions) => handleNewAuthor(values, actions)}
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
            className=" grid p-2 w-full  grid-cols-6  gap-2 "
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
                placeholder="Escriba el nombre del autor "
              />
            </div>

            {/* Añadir second_name */}
            <div>
              <MyTextInput
                name="second_name"
                classNameLabel="font-bold text-lg  block"
                label="Añadir segundo nombre"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.second_name && touched.second_name
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el  segundo nombre del autor "
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
                label="Añadir segundo apellido"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.second_lastname && touched.second_lastname
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el segundo apellido"
              />
            </div>
            {/* Añadir social_media_handles */}
            <div>
              <MyTextInput
                name="social_media_handles"
                classNameLabel="font-bold text-lg  block"
                label="Añadir redes sociales"
                classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.social_media_handles && touched.social_media_handles
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba su redes sociales separadas por coma y utilizando este formato: twitter.com/shopenhauer , facebook.com/shopenhauer  "
              />
            </div>
            {/*Botones salvar y publicar*/}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="  bg-azul-claro rounded-lg text-lg text-white p-2 mt-6 "
              >
                Añadir
              </button>
              </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddAuthor;

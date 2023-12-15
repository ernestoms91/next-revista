"use client";
import { Formik } from "formik";
import { useRef, useState } from "react";
import Image from "next/image";
import { MyTextInput } from "../../ui/Form/MyTextInput";
import { MyTextarea } from "../../ui/Form/MyTextarea";
import { etiquetas, secciones } from "../../lib/publicacion-data";
import { MyCheckbox } from "../../ui/Form/MyCheckbox";
import { newInfoSchema } from "../../lib/helpers/yupSchemaInfoForm";
import PreviewImage from "../../ui/Form/PreviewImage";
import dynamic from "next/dynamic";
import { S3 } from "@aws-sdk/client-s3";
import { uploadImage } from "../../lib/helpers/aws";
import { newAuthorSchema } from "@/app/lib/helpers/yupSchemaAuthorForm";
import revistaApi from "@/app/lib/api/intranetApi";

interface MyFormValues {
  first_name: string;
  second_name: string;
  first_lastname: string;
  second_lastname: string;
  social_media_handles: string | Array<string>;
}

const initialValues: MyFormValues = {
  first_name: "",
  second_name: "",
  first_lastname: "",
  second_lastname: "",
  social_media_handles: "",
};

const Editor2 = dynamic(() => import("@/app/ui/Editor/Editor2"), {
  ssr: false,
});

export default function EditorPage() {
  return (
    <>
      <div className="grid  place-items-center my-2 w-full">
        <h1 className="text-xl font-bold">Nuevo autor</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={newAuthorSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            try {
              
              let { social_media_handles } = values;
              let socialToSend = social_media_handles ;
              if (
                social_media_handles.includes(",") &&
                typeof social_media_handles === "string"
              ) {
                socialToSend = social_media_handles?.split(", ");
              }else{
                socialToSend = [social_media_handles as string]
              }
              console.log(values)

              const {data} = await revistaApi.post(`authors`,{...values, social_media_handles: socialToSend })
              console.log(data)

            } catch (error) {
              console.log(error)
            }
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
              className="  p-2 w-full space-y-3 md:space-y-6 md:w-10/12"
              onSubmit={handleSubmit}
            >
              {/* Añadir first_name*/}
              <MyTextInput
                name="first_name"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir nombre"
                classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.first_name && touched.first_name
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el nombre del autor "
              />

              {/* Añadir second_name */}
              <MyTextInput
                name="second_name"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir segundo nombre"
                classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.second_name && touched.second_name
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el  segundo nombre del autor "
              />

              {/* Añadir first_lastname */}
              <MyTextInput
                name="first_lastname"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir apellido"
                classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.first_lastname && touched.first_lastname
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el  apellido"
              />

              {/* Añadir second_lastname */}
              <MyTextInput
                name="second_lastname"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir segundo apellido"
                classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.second_lastname && touched.second_lastname
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba el segundo apellido"
              />

              {/* Añadir social_media_handles */}
              <MyTextInput
                name="social_media_handles"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir redes sociales"
                classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.social_media_handles && touched.social_media_handles
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Escriba su redes sociales separadas por coma y utilizando este formato: twitter.com/shopenhauer , facebook.com/shopenhauer  "
              />

              {/*Botones salvar y publicar*/}
              <div className="flex gap-4 justify-end">
                <button
                  type="submit"
                  className="  bg-azul-claro rounded-lg text-lg text-white px-8 py-2  "
                >
                  Publicar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

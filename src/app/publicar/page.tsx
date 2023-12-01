"use client";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import Image from "next/image";
import { MyTextInput } from "../ui/Form/MyTextInput";
import { MyTextarea } from "../ui/Form/MyTextarea";
import { etiquetas, secciones } from "../lib/publicacion-data";
import { MyCheckbox } from "../ui/Form/MyCheckbox";
import { newInfoSchema } from "../lib/helpers/yupSchemaInfoForm";
import { MyDateInput2 } from "../ui/Form/MyDateInput2";
import { MyDateInput } from "../ui/Form/MyDateInput";
import Editor from "../ui/Editor/Editor";
import PreviewImage from "../ui/Form/PreviewImage";
import JoditEditor from "../ui/Editor/JoditEditor";

interface MyFormValues {
  image: null;
  pieimagen: string;
  titulo: string;
  enunciado: string;
  autor: string;
  resumen: string;
  etiquetas: Array<string>;
  secciones: Array<string>;
  palabrasclaves: string;
  contenido: string;
  titular: string;
  cita: string;
  enlace: string;
  fecha: string;
}

const initialValues: MyFormValues = {
  image: null,
  pieimagen: "",
  titulo: "",
  enunciado: "",
  autor: "",
  resumen: "",
  etiquetas: [],
  secciones: [],
  palabrasclaves: "",
  contenido: "",
  titular: "",
  cita: "",
  enlace: "",
  fecha: "",
};

export default function EditorPage() {
  const imageRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div className="grid  place-items-center my-2">
        <h1 className="text-xl font-bold">Nueva publicacion</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={newInfoSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log(values);
            // TODO subir la imagen al backend
            // TODO post la info
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
            <form className=" space-y-6 w-10/12" onSubmit={handleSubmit}>
              {/* Añadir imagen */}
              <div className="w-full">
                <h1 className="font-bold text-2xl my-2">
                  Añadir imagen principal
                </h1>
                <input
                  ref={imageRef}
                  type="file"
                  hidden
                  onChange={(event) => {
                    if (event.target.files) {
                      setFieldValue("image", event.target.files[0]);
                    }
                  }}
                />
                {values.image && <PreviewImage file={values.image} />}
                {!values.image && (
                  <div
                    className={`bg-gris-claro  rounded-lg  p-40 flex items-center justify-center  border-2 ${
                      errors.image && touched.image ? "border-rose-600" : ""
                    }`}
                  >
                    <Image
                      src={"/vector.svg"}
                      alt="preview"
                      width={80}
                      height={80}
                    />
                  </div>
                )}
                {errors.image && touched.image && (
                  <h1 className="text-red-600 text-center text-xs italic  my-1">
                    {errors.image}
                  </h1>
                )}
                <button
                  className="bg-azul-claro p-2 flex justify-center items-center rounded my-2"
                  type="button"
                  onClick={() => {
                    if (imageRef.current) {
                      imageRef.current.click();
                    }
                  }}
                >
                  Upload
                </button>
              </div>

              {/* Añadir  pie de imagen */}
              <MyTextInput
                name="pieimagen"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir pie de página"
                classNameInput=" bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full"
                placeholder="Escriba el pie de imagen aquí (opcional)"
              />

              {/* Añadir  título */}
              <MyTextInput
                name="titulo"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir título"
                classNameInput={`bg-gris-claro block p-4 rounded-l-full rounded-t-full w-full border-2 ${
                  errors.titulo && touched.titulo ? "border-rose-600" : ""
                }`}
                placeholder="Escriba su título aquí"
              />

              {/* Añadir autor o autores */}
              <MyTextInput
                name="autor"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir autor o autores"
                classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.autor && touched.autor ? "border-rose-600" : ""
                }`}
                placeholder="Escriba el nombre del autor aquí"
              />

              {/* Añadir enunciado  */}
              <MyTextarea
                maxLength={160}
                name="enunciado"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir enunciado"
                classNameInput={`bg-gris-claro  rounded-lg block p-4   w-full border-2 ${
                  errors.enunciado && touched.enunciado ? "border-rose-600" : ""
                }`}
                placeholder="Escriba su enunciado aquí con no mas de 160 caracteres"
              />

              {/* Añadir resumen  */}
              <MyTextarea
                name="resumen"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir resumen"
                classNameInput={`bg-gris-claro  rounded-lg block p-4   w-full border-2 ${
                  errors.resumen && touched.resumen ? "border-rose-600" : ""
                }`}
                placeholder="Escriba su resumen aquí con no mas de 150 palabras"
              />

              {/* Etiqueta de nivel educativo */}
              <h1 className="font-bold text-2xl my-2">
                Etiqueta de nivel educativo
              </h1>
              <div
                className={`flex  p-2  rounded-lg gap-4 ${
                  errors.etiquetas && touched.etiquetas
                    ? " border-2 border-rose-600"
                    : ""
                }`}
              >
                {etiquetas.map((e) => (
                  <MyCheckbox
                    classNameInput="hidden peer"
                    classNameLabel={`  peer-checked:bg-red-600`}
                    classNameDiv="inline bg-gris-claro rounded-l-full rounded-t-full p-2 peer-checked:border-2  peer-checked:border-black text-lg"
                    key={e}
                    label={e}
                    name={"etiquetas"}
                    value={e}
                  />
                ))}
              </div>
              {errors.etiquetas && touched.etiquetas && (
                <h1 className="text-red-600 text-center text-xs italic  my-1">
                  {errors.etiquetas}
                </h1>
              )}

              {/* Etiqueta de seccion*/}
              <h1 className="font-bold text-2xl my-2">Etiqueta de sección</h1>
              <div
                className={`flex  gap-8  p-2  rounded-lg ${
                  errors.secciones && touched.secciones
                    ? " border-2 border-rose-600"
                    : ""
                }`}
              >
                {secciones.map((e) => (
                  <MyCheckbox
                    classNameInput="hidden peer"
                    classNameLabel={`  peer-checked:bg-red-600`}
                    classNameDiv="inline bg-white  border-2  border-azul-claro text-azul-claro font-bold rounded-l-full rounded-t-full p-2 peer-checked:bg-blue-100  text-lg"
                    key={e}
                    label={e}
                    name={"secciones"}
                    value={e}
                  />
                ))}
              </div>
              {errors.secciones && touched.secciones && (
                <h1 className="text-red-600 text-center text-xs italic  my-1">
                  {errors.secciones}
                </h1>
              )}
              {/* Añadir palabras claves  */}
              <MyTextarea
                maxLength={160}
                name="palabrasclaves"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir palabras claves"
                classNameInput={`bg-gris-claro  rounded-lg block p-4   w-full border-2 ${
                  errors.palabrasclaves && touched.palabrasclaves
                    ? "border-rose-600"
                    : ""
                }`}
                placeholder="Palabras claves"
              />

              {/* Añadir contenido  */}
              <h1 className="font-bold text-2xl my-2">Añadir contenido</h1>

              <div
                className={` ${
                  errors.contenido && touched.contenido
                    ? " border-2 border-rose-600"
                    : ""
                }`}
              >
                <JoditEditor
                  touched={touched}
                  setTouched={setTouched}
                  setFieldValue={setFieldValue}
                  value={values.contenido}
                  placeholder="Escriba el contenido de la publicación"
                />
              </div>
              {errors.contenido && touched.contenido && (
                <h1 className="text-red-600 text-center text-xs italic  my-1">
                  {errors.contenido}
                </h1>
              )}

              {/* Añadir titular  */}
              <MyTextarea
                maxLength={160}
                name="titular"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir titular"
                classNameInput={`bg-gris-claro  rounded-lg block p-4   w-full border-2 ${
                  errors.titular && touched.titular ? "border-rose-600" : ""
                }`}
                placeholder="Escriba el titular aquí"
              />

              {/* Añadir cita  */}
              <MyTextarea
                maxLength={160}
                name="cita"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir cita"
                classNameInput={`bg-gris-claro  rounded-lg block p-4   w-full border-2 ${
                  errors.cita && touched.cita ? "border-rose-600" : ""
                }`}
                placeholder="Escriba la cita aquí"
              />

              {/* Añadir enlace */}
              <MyTextInput
                type="url"
                name="enlace"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir enlace"
                classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.enlace && touched.enlace ? "border-rose-600" : ""
                }`}
                placeholder="Escriba el enlace"
              />

              {/* Fecha programada*/}
              {/* <MyDateInput2
                type="datetime-local"
                name="fecha"
                label="Programar"
                classNameLabel="font-bold text-2xl  block"
                classNameInput=" bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full"
              /> */}

              {/*Botones salvar y publicar*/}
              <div className="flex gap-4 justify-end">
                {/* <button
                  type="submit"
                  className="  bg-gris-claro rounded-lg text-lg text-white px-8 py-2  "
                >
                  Guardar
                </button> */}
                <button
                  type="submit"
                  className="  bg-azul-claro rounded-lg text-lg text-white px-8 py-2  "
                >
                  Guardar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
"use client";
import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MyTextInput } from "@/app/components/ui/form/MyTextInput";
import { MyTextarea } from "@/app/components/ui/form/MyTextarea";
import { etiquetas, secciones } from "../../lib/publicacion-data";
import { MyCheckbox } from "@/app/components/ui/form/MyCheckbox";
import { newInfoSchema } from "../../lib/helpers/yupSchemaInfoForm";
import PreviewImage from "@/app/components/ui/form/PreviewImage";
import dynamic from "next/dynamic";
import { uploadImage } from "../../lib/helpers/aws";
import revistaApi from "@/app/lib/api/intranetApi";
import { article } from "@/app/lib/interfaces/article";

interface MyFormValues {
  image: undefined | File;
  enunciado: string;
  autor: string;
  titulo: string;
  resumen: string;
  etiquetas: string;
  secciones: string;
  palabrasclaves: string;
  // contenido: [];
  // content_html: string;
}

const Editor2 = dynamic(() => import("@/app/components/ui/editor/Editor2"), {
  ssr: false,
});

export default function EditorPage() {
  const [contenido, setContenido] = useState([])
  const [content_html, setContent_html] = useState("")
  const [editorKey, setEditorKey] = useState(Date.now());
 const [error, setError] = useState(false)
  const imageRef = useRef<HTMLInputElement | null>(null);
  const publishButtonRef = useRef<HTMLButtonElement | null>(null);
  

  const handleCubaButtonClick = () => {
    // Verifica si la referencia del botón "Publicar" existe
    if (publishButtonRef.current) {
      // Simula un clic en el botón "Publicar"
      publishButtonRef.current.click();
    }
  };

  const initialValues: MyFormValues = {
    image: undefined,
    enunciado: " ",
    autor: "",
    titulo: "",
    resumen: "",
    etiquetas: "",
    secciones: "",
    palabrasclaves: "",
    // contenido: [],
    // content_html: "",
  };

  return (
    <>
      <div className="grid  place-items-center my-5">
        <h1 className="text-3xl font-bold">Nuevo artículo</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={newInfoSchema}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            try {
              console.log(values);
              let { image } = values;
              let nombre = image?.name;
              const url = uploadImage(image as File);
             if(contenido.length === 0 || !content_html){
              setError(true)
              console.log("contenido o  content_html vacio ")
              return
             }
             setError(false)
              const { data } = await revistaApi.post(`standard_publications`, {
                title: values.titulo,
                publication_type: "standard-publication",
                section: values.secciones[0],
                educational_system: values.etiquetas[0],
                content: JSON.stringify(contenido),
                important: false,
                summary: values.resumen,
                statement: values.enunciado,
                authors: [values.autor],
                content_html: content_html,
                header_image_url: nombre,
              });
              setContenido([])
              setEditorKey(Date.now())
              // console.log(JSON.stringify(values.contenido));
              actions.resetForm();
            } catch (error) {
              console.log(error);
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
              className="  p-2 w-full space-y-3 md:space-y-6 md:w-10/12 "
              onSubmit={handleSubmit}
            >
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
                {errors.image &&
                  touched.image &&
                  typeof errors.image === "string" && (
                    <h1 className="text-red-600 text-center text-xs italic my-1">
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

              {/* Añadir titulo */}
              <MyTextInput
                name="titulo"
                classNameLabel="font-bold text-2xl  block"
                label="Añadir titulo"
                classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                  errors.titulo && touched.titulo ? "border-rose-600" : ""
                }`}
                placeholder="Escriba el titulo aquí"
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
                className={`rounded-lg flex flex-wrap gap-6 p-4 ${
                  errors.etiquetas && touched.etiquetas
                    ? " border-2 border-rose-600"
                    : ""
                }`}
              >
                {etiquetas.map((e) => (
                  <MyCheckbox
                    classNameInput="hidden peer"
                    classNameLabel={`  peer-checked:bg-red-600`}
                    classNameDiv=" inline bg-gris-claro rounded-l-full rounded-t-full p-2 peer-checked:border-2  peer-checked:border-black text-lg"
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
                className={`flex flex-wrap  gap-8  p-2  rounded-lg ${
                  errors.secciones && touched.secciones
                    ? " border-2 border-rose-600"
                    : ""
                }`}
              >
                {secciones.map((e) => (
                  <MyCheckbox
                    classNameInput="hidden peer"
                    classNameLabel={` peer-checked:bg-red-600`}
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

              <button ref={publishButtonRef} className="hidden">
                Cuba
              </button>
            </form>
          )}
        </Formik>

        <div className="grid items-center w-10/12">
          < div>
          {/* Añadir contenido  */}
            <h1 className="font-bold text-2xl my-2 mx-2">Añadir contenido</h1>
            <div  className={ error ? " border-2 border-rose-600"
                    : ""}>
               <Editor2 key={editorKey} setContenido={setContenido} setContent_html={setContent_html} contenido={contenido}/>
            </div>
            {error && (
                <h1 className="text-red-600 text-center text-xs italic  my-1">
                  Revise el contenido
                </h1>
              )}
          </div>
          </div>



          {/*Botones salvar y publicar*/}
          <div className="grid items-center w-10/12 my-4">
            <button
              onClick={handleCubaButtonClick}
              type="submit"
              className="  bg-azul-claro rounded-lg text-lg text-white px-8 py-2 "
            >
              Enviar
            </button>
          </div>
        </div>
    </>
  );
}

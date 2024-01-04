"use client";
import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MyTextInput } from "@/app/components/ui/form/MyTextInput";
import { MyTextarea } from "@/app/components/ui/form/MyTextarea";
import { etiquetas, secciones } from "../../lib/publicacion-data";
import { MyCheckbox } from "@/app/components/ui/form/MyCheckbox";
import { interviewSchema, newInfoSchema } from "../../lib/helpers/yupSchemaInfoForm";
import PreviewImage from "@/app/components/ui/form/PreviewImage";
import dynamic from "next/dynamic";
import { uploadImage } from "../../lib/helpers/aws";
import revistaApi from "@/app/lib/api/intranetApi";
import { MyDateInput } from "../ui/form/MyDateInput";
import { interview } from "../../lib/interfaces/interview";

interface MyFormValues {
  image: File;
  enunciado: string;
  entrevistado: string;
  entrevistador: string;
  titulo: string;
  resumen: string;
  etiquetas: string[];
  secciones: string[];
  palabrasclaves: string;
  contenido: [];
  content_html: string;
  fecha: string;
}

const Editor2 = dynamic(() => import("@/app/components/ui/editor/Editor2"), {
  ssr: false,
});

interface InterviewFormProps {
  interview: interview;
}

const InterviewForm = ({ interview }: InterviewFormProps) => {
  const [contenido, setContenido] = useState([]);
  const [content_html, setContent_html] = useState("");
  const [editorKey, setEditorKey] = useState(Date.now());
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const publishButtonRef = useRef<HTMLButtonElement | null>(null);

  const [initialValues, setInitialValues] = useState<MyFormValues | null>(null);
  const [data, setData] = useState();

  const jsonObj = JSON.parse(interview.content);
  let seccionesCapitalizado =
    interview.section.name.charAt(0).toUpperCase() +
    interview.section.name.slice(1);
  let etiquetasCapitalizado =
    interview.educational_system.name.charAt(0).toUpperCase() +
    interview.educational_system.name.slice(1);

  const fetchImageAndCreateFile = async () => {
    try {
      const publicUrl = `${process.env.NEXT_PUBLIC_MINIO_URL}/media/${interview.header_image_url}`;
      const response = await fetch(publicUrl);
      const blob = await response.blob();

      // Aquí puedes realizar operaciones adicionales con el blob si es necesario

      // Crear un objeto File a partir del blob
      const fileName = publicUrl.substring(publicUrl.lastIndexOf("/") + 1);
      const file = new File([blob], fileName, { type: blob.type });

      return file;
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      throw error;
    }
  };

  const handleCubaButtonClick = () => {
    // Verifica si la referencia del botón "Publicar" existe
    if (publishButtonRef.current) {
      // Simula un clic en el botón "Publicar"
      publishButtonRef.current.click();
    }
  };

  const cargarDatosIniciales = async () => {
    try {
      const imagen = await fetchImageAndCreateFile();
      setContent_html(interview.content_html);
      setContenido(jsonObj);
      //Todo: Palabras claves del backend
      const initialValues: MyFormValues = {
        image: imagen, // Ahora image recibe directamente el objeto File
        enunciado: interview.statement,
        entrevistado: interview.interviewer,
        entrevistador: interview.interviewee,
        titulo: interview.title,
        resumen: interview.summary,
        etiquetas: [etiquetasCapitalizado],
        secciones: [seccionesCapitalizado],
        palabrasclaves: "Bien hecho",
        contenido: jsonObj,
        content_html: interview.content_html,
        fecha: interview.published_at ? interview.published_at : "",
      };

      setInitialValues(initialValues);
    } catch (error) {
      console.error("Error al cargar datos iniciales:", error);
    }
  };

  useEffect(() => {
    cargarDatosIniciales();
  }, []);

  if (!initialValues) {
    // Puedes renderizar un mensaje de carga o simplemente esperar hasta que initialValues esté listo
    return <p>Cargando datos iniciales...</p>;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={interviewSchema}
        enableReinitialize={true}
        onSubmit={async (values) => {
          try {
            console.log(values);
            let { image } = values;
            let nombre = image?.name;
            const url = uploadImage(image as File);
            if (contenido.length === 0 || !content_html) {
              setError(true);
              console.log("contenido o  content_html vacio ");
              return;
            }
            setError(false);
            //TODO: Pasar fecha y keywords backend
            const { data } = await revistaApi.put(
              `interviews/${interview.id}`,
              {
                title: values.titulo,
                publication_type: "standard-publication",
                section: values.secciones[0],
                educational_system: values.etiquetas[0],
                content: JSON.stringify(values.contenido),
                important: false,
                summary: values.resumen,
                statement: values.enunciado,
                content_html: values.content_html,
                header_image_url: nombre,
                published_at: values.fecha,
              }
            );
            setContenido([]);
            setEditorKey(Date.now());
            console.log(JSON.stringify(values.contenido));
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
            {/* Añadir entrevistado */}
            <MyTextInput
              name="entrevistado"
              classNameLabel="font-bold text-2xl  block"
              label="Añadir entrevistado"
              classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                errors.entrevistado && touched.entrevistado
                  ? "border-rose-600"
                  : ""
              }`}
              placeholder="Escriba el nombre del entrevistado aquí"
            />

            {/* Añadir entrevistador */}
            <MyTextInput
              name="entrevistador"
              classNameLabel="font-bold text-2xl  block"
              label="Añadir entrevistador"
              classNameInput={`bg-gris-claro block p-4  rounded-l-full rounded-t-full w-full border-2 ${
                errors.entrevistador && touched.entrevistador
                  ? "border-rose-600"
                  : ""
              }`}
              placeholder="Escriba el nombre del entrevistador aquí"
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
                  checked={values.etiquetas.includes(e)}
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
                  checked={values.secciones.includes(e)}
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

            {/* Añadir fecha publicacion  */}
            <MyDateInput
              label="Fecha de publicación"
              type="date"
              classNameLabel="font-bold text-2xl  block"
              name="fecha"
              classNameInput={`bg-gris-claro  rounded-lg block p-4   w-full border-2 ${
                errors.fecha && touched.fecha ? "border-rose-600" : ""
              }`}
            />

            <button ref={publishButtonRef} className="hidden">
              Cuba
            </button>
          </form>
        )}
      </Formik>
      <div className="grid items-center w-10/12">
        <div>
          {/* Añadir contenido  */}
          <h1 className="font-bold text-2xl my-2 mx-2">Añadir contenido</h1>
          <div className={error ? " border-2 border-rose-600" : ""}>
            <Editor2
              key={editorKey}
              setContenido={setContenido}
              setContent_html={setContent_html}
              contenido={initialValues.contenido}
            />
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
          Publicar
        </button>
      </div>
    </>
  );
};

export default InterviewForm;

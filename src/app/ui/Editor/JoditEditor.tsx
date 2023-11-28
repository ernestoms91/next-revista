import React, { useState, useRef, useMemo } from "react";
import JoditEditorComponent from "jodit-react";
import "jodit";
import "jodit/build/jodit.min.css";
import { FormikTouched, FormikValues } from "formik";

interface Props {
  setFieldValue: (campo: string, valor: string | number) => void;
  value: string;
  touched: FormikTouched<FormikValues>;
  setTouched: (
    touched: FormikTouched<FormikValues>,
    shouldValidate?: boolean | undefined
  ) => void;
  placeholder: string;
}

const JoditEditor = ({
  setFieldValue,
  value,
  touched,
  setTouched,
  placeholder,
}: Props) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleFileUpload = (file: File, callback: (url: string) => void) => {
    // Aquí puedes escribir la lógica para cargar el archivo en tu servidor
    // y obtener la URL de la imagen cargada.
    // Después de obtener la URL, llama a `callback` con la URL de la imagen.
    // Por ejemplo:
    // uploadFileToServer(file).then((imageUrl) => callback(imageUrl));
  };

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      
      uploader: {
        insertImageAsBase64URI: true, // Inserta la imagen como URI base64
        filesVariableName: "files", // Nombre de la variable que contiene los archivos en la solicitud de carga
        process: {
          url: "/your-upload-endpoint", // URL de tu endpoint de carga de archivos
          method: "POST", // Método HTTP para la solicitud de carga de archivos
          withCredentials: false, // Define esto en `true` si necesitas enviar cookies con la solicitud
          headers: {}, // Cabeceras personalizadas para la solicitud de carga de archivos
          // Opcional: Puedes agregar más opciones de configuración según tus necesidades
        },
        defaultHandlerSuccess: (data: any, callback: (url: string) => void) => {
          // En caso de éxito en la carga del archivo, obtén la URL de la imagen
          // desde la respuesta del servidor y llama a `callback` con la URL.
          // Por ejemplo:
          // const imageUrl = data.url;
          // callback(imageUrl);
        },
        defaultHandlerError: (response: any) => {
          // En caso de error en la carga del archivo, maneja el error según tus necesidades.
          // Por ejemplo:
          // console.error('Error uploading file:', response);
        },
        prepareData: (formData: FormData) => {
          // Aquí puedes realizar modificaciones adicionales en los datos del formulario
          // antes de enviar la solicitud de carga.
          // Por ejemplo, puedes agregar campos adicionales o personalizar la estructura de datos.
          // No olvides devolver el objeto `formData` modificado.
          return formData;
        },
        processFiles: handleFileUpload, // Llama a la función de manejo de carga de archivos
      },
    }),
    [placeholder]
  );

  return (
    <JoditEditorComponent
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
      onChange={(newContent) => {
        setFieldValue("contenido", newContent);
        setTouched({ ...touched, contenido: true });
      }}
    />
  );
};

export default JoditEditor;

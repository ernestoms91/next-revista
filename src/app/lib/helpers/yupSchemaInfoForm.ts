import * as Yup from "yup";
import { etiquetas, secciones } from "../publicacion-data";

const MAX_FILE_SIZE = 1024000; //1000KB
const ciRegex = /^[0-9]+$/;

const validFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

export const newInfoSchema = () => {
  return Yup.object().shape({
    image: Yup.mixed()
      .required("Required")
      .test("is-valid-type", "Not a valid image type", (value) =>
        isValidFileType(value && value.name.toLowerCase(), "image")
      )
      .test(
        "is-valid-size",
        "Max allowed size is 100KB",
        (value) => value && value.size <= MAX_FILE_SIZE
      ),

    enunciado: Yup.string()
      .required("El enunciado es obligatorio")
      .min(2, "El enunciado es muy corto"),

    titulo: Yup.string()
      .required("El titulo es obligatorio")
      .min(2, "El titulo es muy corto"),

    autor: Yup.string()
      .required("El autor es obligatorio")
      .matches(ciRegex, "El id de autor no es válido"),

    resumen: Yup.string()
      .required("El resumen es obligatorio")
      .min(2, "El resumen es muy corto")
      .test(
        "wordCount",
        "El resumen no puede tener más de 150 palabras",
        (value) => {
          if (value) {
            const wordCount = value.trim().split(/\s+/).length;
            return wordCount <= 150;
          }
          return true;
        }
      ),

    etiquetas: Yup.array()
      .required("Nivel educativo requerido")
      .min(1, " El nivel educativo no puede estar vacío")
      .max(1, "Seleccione solo uno"),

    secciones: Yup.array()
      .required("Seccion requerida")
      .min(1, " La  seccion no puede estar vacío")
      .max(1, "Seleccione solo uno"),


    palabrasclaves: Yup.string()
      .required("Las palabras claves son obligatorias")
      .min(2, "Las palabra clave es muy corta")
      .test(
        "wordCount",
        "Las palabras claves no puede contener más de 20 palabras",
        (value) => {
          if (value) {
            const wordCount = value.trim().split(/\s+/).length;
            return wordCount <= 20;
          }
          return true;
        }
      ),

    // contenido: Yup.array().min(2, " El contenido no puede estar vacío"),
  });
};

import * as Yup from "yup";

const MAX_FILE_SIZE = 102400; //100KB

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

    titulo: Yup.string()
      .required("El título es obligatorio")
      .min(2, "El título es muy corto")
      .max(20, "El título es muy largo"),

    autor: Yup.string()
      .required("El autor es obligatorio")
      .min(2, "El nombre del autor es muy corto")
      .max(20, "El nombre del autor es muy largo"),

    enunciado: Yup.string()
      .required("El enunciado es obligatorio")
      .min(2, "El enunciado es muy corto"),

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

    etiquetas: Yup.array().min(1, " Debe seleccionar al menos una etiqueta"),

    secciones: Yup.array().min(1, " Debe seleccionar al menos una sección"),

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

    contenido: Yup.string()
      .required("El contenido es obligatorio")
      .min(2, "El contenido es muy corto"),

    titular: Yup.string()
      .required("El titular es obligatorio")
      .min(2, "El titular es muy corto"),

    cita: Yup.string()
      .required("La cita es obligatoria")
      .min(2, "La cita es muy corta"),

    enlace: Yup.string()
      .required("El enlace es obligatorio")
      .matches(
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
        "El enlace no es válido"
      ),
  });
};

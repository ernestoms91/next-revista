import * as Yup from "yup";



export const newAuthorSchema = () => {
  return Yup.object().shape({

    first_name: Yup.string()
      .required("El nombre es obligatorio")
      .min(2, "El nombre es muy corto"),

      second_name: Yup.string()
      .min(2, "El segundo nombre es muy corto"),
    
      first_lastname: Yup.string()
      .required("El apellido es obligatorio")
      .min(2, "El apellido es muy corto"),

      second_lastname: Yup.string()
      .required("El segundo apellido es obligatorio")
      .min(2, "El segundo apellido es muy corto"),

      social_media_handles: Yup.string()
      .required("Al menos debe introducir una red social")
      .min(5, "Revise el formato"),
      
  });
};

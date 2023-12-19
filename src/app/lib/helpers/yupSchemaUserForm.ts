import * as Yup from "yup";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const ciRegex = /^[0-9]+$/;
const symbolRegex = /(?=.*\W)/;

const passwordSchema = Yup.string()
  .matches(lowercaseRegex, "Debe contener al menos una minúscula")
  .matches(uppercaseRegex, "Debe contener al menos una mayúscula")
  .matches(numericRegex, "Debe contener al menos un número")
  .matches(
    symbolRegex,
    "Debe contener al menos un símbolo (que no sea un guión bajo)"
  )
  .min(8, "Debe contener al menos 8 caracteres");

  const phoneRegExp = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  const educationalLevels: string[] = [
    "Doctorate Degree",
    "Master's Degree",
    "Bachelor's Degree",
    "Associate Degree",
    "High School Diploma",
    "Some High School",
    "No Formal Education"
  ];
  
  const roles: string[] = [
    "normal",
    "editor",
  ];
  


export const newUserSchema = () => {
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

      username: Yup.string()
      .required("El usuario es obligatorio")
      .min(4, "El usuario es muy corto")
      .max(20, "El usuario es muy largo"),

      email: Yup.string()
      .lowercase()
      .email("Escriba un email válido")
      .required("Introduzca su email"),

      phone_number: Yup.string()
      .required("Introduzca su telf")
      .matches(phoneRegExp, 'Phone number is not valid'),

      educational_level: Yup.string()
      .oneOf(educationalLevels, "Debe seleccionar una opción")
      .required("Seleccione escolaridad"),

      role: Yup.string()
      .oneOf(roles, "Debe seleccionar una opción")
      .required("Seleccione un rol"),

      password: Yup.string()
      .required("Introduzca una contraseña")
      .matches(lowercaseRegex, "Debe contener al menos una minúscula")
      .matches(uppercaseRegex, "Debe contener al menos una mayúscula")
      .matches(
        symbolRegex,
        "Debe contener al menos una símbolo (no incluye guión bajo )"
      )
      .matches(numericRegex, "Debe contener al menos una número")
      .min(8, "Debe contener al menos 8 caracteres"),

    password2: Yup.string()
      .required("Confirme su contraseña")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
      
  });
};


export const editUserSchema = () => {
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

      username: Yup.string()
      .required("El usuario es obligatorio")
      .min(4, "El usuario es muy corto")
      .max(20, "El usuario es muy largo"),

      email: Yup.string()
      .lowercase()
      .email("Escriba un email válido")
      .required("Introduzca su email"),

      phone_number: Yup.string()
      .required("Introduzca su telf")
      .matches(phoneRegExp, 'Phone number is not valid'),

      educational_level: Yup.string()
      .oneOf(educationalLevels, "Debe seleccionar una opción")
      .required("Seleccione escolaridad"),

      role: Yup.string()
      .oneOf(roles, "Debe seleccionar una opción")
      .required("Seleccione un rol"),

      password: Yup.string()
      .matches(lowercaseRegex, "Debe contener al menos una minúscula")
      .matches(uppercaseRegex, "Debe contener al menos una mayúscula")
      .matches(
        symbolRegex,
        "Debe contener al menos una símbolo (no incluye guión bajo )"
      )
      .matches(numericRegex, "Debe contener al menos una número")
      .min(8, "Debe contener al menos 8 caracteres"),

    password2: Yup.string()
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
      
  });
};
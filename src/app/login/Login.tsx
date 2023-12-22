'use client'

import { Formik, FormikHelpers } from "formik";
import { MyTextInput } from "../ui/Form/MyTextInput";
import Navbar from "../ui/Navbar";
import { MyPassInput } from "../ui/MyPassInput";
import * as Yup from "yup";


interface MyFormValues {
    user: string;
    password: string;
  }

  const initialValues: MyFormValues = {
    user:"",
    password:""
  }

const Login = () => {

    const SignupSchema = Yup.object().shape({
        user: Yup.string()
          .min(2, "Muy corto!")
          .max(50, "Muy largo!")
          .required("Requerido"),
        password: Yup.string()
          .min(2, "Muy corto!")
          .max(50, "Muy largo!")
          .required("Requerido"),
      });


  return (
    <>
    <Navbar />
    <div className="p-10 ">
    <Formik
    initialValues={initialValues}
    validationSchema={SignupSchema}
    enableReinitialize={true}
    onSubmit={async (values, actions) => {
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
        className=" w-full "
        onSubmit={handleSubmit}
      >
        {/* Añadir usuario*/}
        <div className="w-full">
          <MyTextInput
            name="user"
            classNameLabel="font-bold text-2xl"
            label="Usuario"
            classNameInput={`bg-gris-claro my-5 p-2 h-14 w-full rounded-l-full rounded-t-full w-full border-2 ${
              errors.user && touched.user
                ? "border-rose-600"
                : ""
            }`}
            placeholder="Escriba su usuario "
          />
        </div>

        {/* Añadir password */}
        <div>
          <MyPassInput
            name="password"
            classNameLabel="font-bold text-2xl block"
            label="Contraseña"
            classNameInput={`bg-gris-claro my-5 p-2 h-14 rounded-l-full  w-full border-2 border-r-0 ${
              errors.password && touched.password
                ? "border-rose-600"
                : ""
            }`}
            placeholder="Escriba la contraseña  "
          />
        </div>
                 {/*Botones salvar y publicar*/}
                 <div className="flex justify-center">
                <button
                  type="submit"
                  className="  bg-azul-claro rounded-lg text-lg text-white px-10 py-2  "
                >
                 Entrar
                </button>
              </div>
      </form>
    )}
  </Formik>
  </div>
  </>
  )
}

export default Login
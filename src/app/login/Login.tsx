'use client'

import { Formik, FormikHelpers } from "formik";
import { MyTextInput } from "../ui/Form/MyTextInput";
import Navbar from "../ui/Navbar";


interface MyFormValues {
    user: string;
    password: string;
  }

  const initialValues: MyFormValues = {
    user:"",
    password:""
  }

const Login = () => {
  return (
    <>
    <Navbar />
    <div className="mx-auto">
    <Formik
    initialValues={initialValues}
    // validationSchema={userEdit ? editUserSchema : newUserSchema}
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
            classNameLabel="font-bold text-lg "
            label="Usuario"
            classNameInput={`bg-gris-claro block p-2 w-full rounded-l-full rounded-t-full w-full border-2 ${
              errors.user && touched.user
                ? "border-rose-600"
                : ""
            }`}
            placeholder="Escriba el nombre  "
          />
        </div>

        {/* Añadir password */}
        <div>
          <MyTextInput
            name="password"
            type="password"
            classNameLabel="font-bold text-lg  block"
            label="Añadir  nombre"
            classNameInput={`bg-gris-claro block p-2  rounded-l-full rounded-t-full w-full border-2 ${
              errors.password && touched.password
                ? "border-rose-600"
                : ""
            }`}
            placeholder="Escriba el segundo nombre  "
          />
        </div>
      
      </form>
    )}
  </Formik>
  </div>
  </>
  )
}

export default Login
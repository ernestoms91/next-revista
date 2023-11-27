import { ErrorMessage, Field, useField } from "formik";

interface Props {
  label?: string;
  name: string;
  pattern?: string;
  placeholder?: string;
  classNameLabel?: string;
  classNameInput?: string;
  [x: string]: any;
}

export const MyTextarea = ({
  label,
  classNameLabel,
  classNameInput,
  ...props
}: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label className={`${classNameLabel}`} htmlFor={props.name}>
        {label}
      </label>
      <Field as='textarea'
        className={`text-input ${classNameInput}`}
        {...field}
        {...props}
        name={props.name}
        id={props.name}
      />
      <ErrorMessage
        name={props.name}
        component="h1"
        className="text-red-600 text-center text-xs italic  my-1"
      />
    </>
  );
};

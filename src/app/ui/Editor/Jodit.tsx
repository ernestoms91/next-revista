import { useRef, useMemo, useState } from 'react'
import dynamic from 'next/dynamic';
import { FormikTouched, FormikValues } from "formik";

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

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

const Jodit = ({
  setFieldValue,
  value,
  touched,
  setTouched,
  placeholder,
}: Props) => {

  const editor = useRef(null)
  const [content, setContent] = useState("");
  
  return (
    <JoditEditor
       ref={editor}
        value={content}
       onChange={(newContent) => {
      setFieldValue("contenido", newContent);
      setTouched({ ...touched, contenido: true });
    }}
    />
  )
}
export default Jodit
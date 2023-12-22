import { ErrorMessage, Field, useField } from 'formik';
import Prueba from './Prueba';
import { useState } from 'react';

interface Props {
    label?: string;
    name: string;
    pattern?: string;
    placeholder?: string;
    classNameLabel?: string;
    classNameInput?: string;
    [x: string]: any;
}


export const MyPassInput = ( { label, classNameLabel ,classNameInput, ...props }: Props ) => {

    const [ field ] = useField(props)
     const [show, setShow] = useState(false)

    return (  
        <>
                    <label className={`${classNameLabel}`} htmlFor={props.name}>
        {label}
      </label>
            <div className='flex  bg-gray-50'>

            <Field className={`text-input ${classNameInput} border-r-0 border-gray-100 focus:ring-primary-600 focus:border-r-0` } type={show ? "text" : "password"} { ...field } { ...props } name={props.name} id={props.name} />
            <Prueba show={show} setShow={setShow}/>
            </div>
            <ErrorMessage name={ props.name } component="h1"  className='text-red-600 text-center text-xs italic  my-1'/>
        </>
    )
}

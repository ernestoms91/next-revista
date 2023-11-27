import { ErrorMessage, Field, useField } from 'formik';

interface Props {
    name: string;
    placeholder?: string;
    classNameLabel?: string;
    classNameSelect?: string;
    [x: string]: any;
}


export const MySelect = ( { label, classNameLabel,classNameSelect, ...props }: Props ) => {

    const [ field ] = useField(props)

    return (
        <>
            <Field as="select"  className={ `${classNameSelect}` } { ...field } { ...props } name={props.name} id={props.name}/> 
            <ErrorMessage name={ props.name } component="h1" className='text-red-600 text-center text-xs italic  my-1 '/>
        </>
    )
}

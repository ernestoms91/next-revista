import { ErrorMessage, Field, useField } from 'formik';

interface Props {
    label?: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'datetime-local';
    placeholder?: string;
    classNameLabel?: string;
    classNameInput?: string;
    [x: string]: any;
}


export const MyDateInput2 = ( { label, classNameLabel ,classNameInput, ...props }: Props ) => {

    const [ field ] = useField(props)
    const date = new Date;
    let dateToString = date.toLocaleString("en-CA").split(',')

    return (
        <>
            <label className={`${classNameLabel}`} htmlFor={ props.name }>{ label }</label>
            {/* <label className={`${classNameLabel}`} htmlFor={ props.id || props.name }>{ label }</label> */}
            <Field className={`text-input ${classNameInput} `}  { ...field } { ...props } id={props.name} />
            <ErrorMessage name={ props.name } component="h1"  className='text-red-600 text-center '/>
        </>
    )
}

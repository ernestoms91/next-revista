import { ErrorMessage, Field, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    value: string;
    classNameLabel?: string;
    classNameInput?: string;
    classNameDiv?: string;
    [x: string]: any;
}


export const MyCheckbox = ({ value, label, classNameLabel, classNameDiv, ...props }: Props) => {

    const [field] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label className={classNameLabel}>
                <Field type="checkbox" className={props.classNameInput} name={props.name} value={value} />
                <div className={classNameDiv}> {label}</div>
            </label>
            {/* <label htmlFor={ props.id || props.name }>
                <input type="checkbox" { ...field } { ...props } name={props.name} id={props.name} value={value}/>
                 { label }            
            </label> */}
            {/* <ErrorMessage name={ props.name } component="span" className='text-center text-xs'/> */}
            {/* <ErrorMessage name={ props.name } render={msg =><div className=" text-red-600">{msg}</div>}/> */}
        </>
    )
}

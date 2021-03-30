// input: {name: "email", onBlur: ƒ, onChange: ƒ, onDragStart: ƒ, onDrop: ƒ, …}
// label: "Email"
// meta: {active: false, asyncValidating: false, autofilled: false, dirty: false, dispatch: ƒ, …}
// placeholder: "Email"
// type: "email"


import React from 'react';
import styles from './RenderField.module.scss';

type RenderFieldPropsType = any

export const RenderField: React.FC<RenderFieldPropsType> = (props) => {
    const {input, label, placeholder, type, meta: {touched, error, warning}} = props
    const hasError = touched && error
    return <div className={(error? styles.error:"")}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type}/>
            {/*{(error && <span>{error}</span>)}*/}
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
}



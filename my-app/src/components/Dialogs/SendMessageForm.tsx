import React from 'react';
import styles from './Dialogs.module.scss';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'


const DialogsTextarea : React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="newMessage" component="textarea" type="text" className={styles.text}/>
            </div>
            <button type="submit" className={styles.button}>Send message</button>
        </form>
    )
}
const DialogsReduxForm = reduxForm<DialogsFormDataType>({
    form: 'SendMessageForm'
})(DialogsTextarea)


export const SendMessageForm = (props:DialogsFormPropsType) => {
    const onSubmit = (formData: DialogsFormDataType) => {
        props.sendMessage(formData.newMessage)
    }
    return <div>
        <DialogsReduxForm onSubmit={onSubmit}/>
    </div>
}


type DialogsFormDataType = {
    newMessage: string
}
type DialogsFormPropsType = {
    sendMessage: (message: string) => void
}
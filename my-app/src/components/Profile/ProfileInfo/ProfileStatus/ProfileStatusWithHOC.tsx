import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {RenderField} from '../../../common/RenderField/RenderField';
import styles from './ProfileStatusWithHOC.module.scss';
import {AiFillCloseCircle} from "react-icons/ai"
import {maxLength20, minLength3} from '../../../util/validators';


type ProfileStatusPropsType = {
    status: string,
    userID: string
    updateUserStatus: (status: string,) => void
    authorizedUserID: string
}


export const ProfileStatusWithHOC: React.FunctionComponent<ProfileStatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const setIsMode = (editMode: boolean) => {
        if (props.userID == props.authorizedUserID) {
            setEditMode(editMode)
        }
    }
    return <>
        {!editMode &&
        <div className={styles.wrapper_first}>
            <span
                onClick={() => setIsMode(true)} className={styles.content}>{(props.status == '' || props.status == null) ? 'No status' : props.status}</span>
        </div>
        }
        {editMode &&
            <StatusForm setEditMode={setIsMode} status={props.status} updateUserStatus={props.updateUserStatus}/>
        }
    </>
}


type StatusDataFormPropsType = {
    status: string
}

const StatusDataForm: React.FC<InjectedFormProps<StatusDataFormPropsType>> = (props) => {
    const {handleSubmit, pristine, reset, submitting, initialValues} = props
    return <form onSubmit={handleSubmit} className={styles.wrapper_form}>
        <Field placeholder={"New status..."}
               name={'status'}
               component={RenderField}
               type={'text'}
               className={styles.field}
               validate={[maxLength20,minLength3]} autoFocus={true}/>
        <button type="submit" disabled={submitting} className={styles.btn}>Save</button>

    </form>
}


const StatusReduxForm = reduxForm<StatusDataFormPropsType>({form: 'status'})(StatusDataForm)

type StatusFormPropsType ={
    status: string
    updateUserStatus: (status: string,) => void
    setEditMode: (value: boolean,) => void

}
const StatusForm = (props: StatusFormPropsType) => {
    const onSubmit = (formData: StatusDataFormPropsType) => {
        props.updateUserStatus(formData.status)
        props.setEditMode(false)
    }
    return <div className={styles.wrapper}>
        <AiFillCloseCircle onClick={()=>props.setEditMode(false)}/>
        <StatusReduxForm onSubmit={onSubmit}
            //@ts-ignore
                         initialValues={ {status:props.status}}/>
    </div>
}
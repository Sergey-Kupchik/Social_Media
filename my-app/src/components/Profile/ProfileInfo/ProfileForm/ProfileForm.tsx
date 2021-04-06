import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import styles from '../../../Login/Login.module.scss';
import {RenderField} from '../../../common/RenderField/RenderField';
import {emailValidator, maxLength30, minLength10, required} from '../../../util/validators';
import {LoginFormDataType} from '../../../Login/Login';
import {PhotosType, ProfileType} from '../../Profile';


//Types
 export type ProfileFormDataType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType>> = (props) => {

    const {handleSubmit, pristine, reset, submitting, initialValues} = props
    return (
        <form onSubmit={handleSubmit} className={styles.wrapper_form}>
            <FieldGenerator  name={"aboutMe"} placeholder={"aboutMe"} validate={[maxLength30]}/>
            <FieldGenerator name={"fullName"} placeholder={"fullName"} validate={[maxLength30]}/>
            <FieldGenerator type={"checkbox"} component={"input"} name={"lookingForAJob"} validate={[maxLength30]}/>
            <FieldGenerator name={"lookingForAJobDescription"} placeholder={"lookingForAJobDescription"} validate={[maxLength30]}/>
            <FieldGenerator name={"contacts.facebook"} placeholder={"facebook"}/>
            <FieldGenerator  name={"contacts.vk"} placeholder={"vk"}/>
            <FieldGenerator  name={"contacts.twitter"} placeholder={"twitter"}/>
            <FieldGenerator  name={"contacts.instagram"} placeholder={"instagram"}/>
            <FieldGenerator  name={"contacts.youtube"} placeholder={"youtube"}/>
            <FieldGenerator  name={"contacts.github"} placeholder={"github"}/>
            <FieldGenerator  name={"contacts.mainLink"} placeholder={"mainLink"}/>
            <button type="submit" disabled={submitting} className={styles.btn}>Save</button>
        </form>
    )
}

type FieldGeneratorPropsType = {
    placeholder?:string
    name:string
    type?:string
    component?: string|React.FC
    validate?: Array<Function>
}
const FieldGenerator =React.memo(function FieldGenerator (props:FieldGeneratorPropsType){
    return <div className={`${styles.item}  ${styles.item_text}`}>
        <Field placeholder={props.placeholder}
               name={props.name?props.name:"text"}
               component={props.component?props.component:RenderField}
               type={props.type}
               className={styles.field}  validate={props.validate}/>
    </div>
})



const ProfileReduxForm = reduxForm<ProfileFormDataType>({form: 'profile'})(ProfileDataForm)

type ProfileFormPropsType = {
    setEditModeToFalse: () => void
    updateProfile: (profile: ProfileFormDataType) => void
}
export const ProfileForm = React.memo(function (props:ProfileFormPropsType) {
    const onSubmit = (formData: ProfileFormDataType) => {
 debugger
        props.updateProfile(formData)
        props.setEditModeToFalse()
    }
    return <div>
        <ProfileReduxForm onSubmit={onSubmit}/>
    </div>
})
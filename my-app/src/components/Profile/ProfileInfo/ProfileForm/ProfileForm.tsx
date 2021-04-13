import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import stylesForm from './../ProfileStatus/ProfileStatusWithHOC.module.scss';
import styles from './ProfileForm.module.scss';
import {RenderField} from '../../../common/RenderField/RenderField';
import {maxLength30, maxLength90, required} from '../../../util/validators';
import {AiFillCloseCircle} from 'react-icons/ai';
import {ProfileType} from '../../Profile';


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

//The component that allows us to change params in user profile and also contains form
const ProfileDataForm: React.FC<InjectedFormProps<ProfileFormDataType>> = (props) => {
    const {handleSubmit, pristine, reset, submitting, initialValues} = props
    debugger
    return (
        <form onSubmit={handleSubmit} className={stylesForm.wrapper_form}>
            <FieldGenerator name={'fullName'} placeholder={'Full name'} validate={[maxLength30,required]}/>
            <FieldGenerator name={'aboutMe'} placeholder={'About me'} validate={[maxLength90,required]}/>
            <div className={stylesForm.fieldLine}><span >Open for discussion:</span><FieldGenerator type={'checkbox'} component={'input'} name={'lookingForAJob'}/></div>
            <FieldGenerator name={'lookingForAJobDescription'} placeholder={'Description'}
                            validate={[maxLength90,required]}/>
            <FieldGenerator name={'contacts.Facebook'} placeholder={'facebook'} validate={[]}/>
            <FieldGenerator name={'contacts.Vk'} placeholder={'linkedin'}/>
            <FieldGenerator name={'contacts.Twitter'} placeholder={'twitter'}/>
            <FieldGenerator name={'contacts.Instagram'} placeholder={'instagram'}/>
            <FieldGenerator name={'contacts.Youtube'} placeholder={'youtube'}/>
            <FieldGenerator name={'contacts.Github'} placeholder={'github'}/>
            <FieldGenerator name={'contacts.MainLink'} placeholder={'mainLink'}/>
            <button type="submit" disabled={submitting} className={stylesForm.btn}>Save</button>

        </form>
    )
}

type FieldGeneratorPropsType = {
    placeholder?: string
    name: string
    type?: string
    component?: string | React.FC
    validate?: Array<Function>
}
const FieldGenerator = React.memo(function FieldGenerator(props: FieldGeneratorPropsType) {
    return <div className={`${styles.item}  ${styles.item_text}`}>
        <Field placeholder={props.placeholder}
               name={props.name}
               component={props.component ? props.component : RenderField}
               type={props.type}
               className={stylesForm.field} validate={props.validate} />
    </div>
})


const ProfileReduxForm = reduxForm<ProfileFormDataType>({form: 'profile'})(ProfileDataForm)

type ProfileFormPropsType = {
    setEditModeToFalse: () => void
    updateProfile: (profile: ProfileFormDataType) => Promise<string>|void
    initialValues:ProfileType
}
export const ProfileForm = React.memo(function (props: ProfileFormPropsType) {
    const onSubmit =  (formData: ProfileFormDataType) => {
        //@ts-ignore
         props.updateProfile(formData).then(()=>{
             props.setEditModeToFalse()
         })

    }


//function hides the profile from without changing the data
    const resetEditMode = () => {
        props.setEditModeToFalse()
    }

    return <div className={`${styles.wrapper} ${stylesForm.wrapper}`}>
        <AiFillCloseCircle onClick={resetEditMode}/>

        <ProfileReduxForm onSubmit={onSubmit}
            //@ts-ignore
                          initialValues={props.initialValues}/>
    </div>
})
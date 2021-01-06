import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';




let LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props ) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={'input'} type={'email'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
            </div>
            <button type="submit">Log In</button>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: LoginFormDataType) =>
    {console.log(formData)}
    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}


export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}
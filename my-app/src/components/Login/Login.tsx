import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

interface Props {
};

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}
let LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props ) => {
    // const {handleSubmit} = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} type={'login'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {const onSubmit = (formData: FormDataType) => {console.log(formData)
    }
    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}



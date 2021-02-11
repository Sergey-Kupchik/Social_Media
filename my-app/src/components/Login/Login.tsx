import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {emailValidator, maxLength30, minLength5, required} from '../util/validators';
import {RenderField} from '../common/RenderField/RenderField';
import {connect} from 'react-redux';
import {
    followUser,
    setUpAllUsers,
    setUpCurrentPage,
    toggle_followingInProgress,
    toggle_isFetching, unfollowUser
} from '../../redux/usersReducer';
import {UsersAPIComponent} from '../Users/UsersAPIComponent';
import {loginUser} from '../../redux/authReducer';
import {RootState} from '../../redux/storeRedux';
import {Redirect} from 'react-router-dom';


let LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {

    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={RenderField}
                       label="Email"
                       validate={emailValidator}
                       type={'email'}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={'input'}
                       type={'password'}
                       validate={[required, maxLength30, minLength5]}/>
            </div>
            <div>Remember me
                <Field name={'rememberMe'}
                       component={'input'}
                       type={'checkbox'}/>
            </div>
            <button type="submit" disabled={submitting}>Log In</button>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.loginUser(formData)
    }
    // if (props.authorize) {
    //     return <Redirect to="/profile/12113"/>
    //
    // } else {
        return <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    // }
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}
type DispatchPropsType = {
    loginUser: (data: LoginFormDataType) => Function
}


// Types
type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type LoginPropsType = {
    loginUser: (data: LoginFormDataType) => Function
    authorize: boolean
}


// mapStateToProps
const mapStateToProps = (state: RootState) => ({
    authorize: state.app.authorize
})


export const LoginContainer = connect<mapStateToPropsType, DispatchPropsType, {}, RootState>(mapStateToProps, {loginUser})(Login)
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {emailValidator, maxLength30, minLength5, required} from '../util/validators';
import {RenderField} from '../common/RenderField/RenderField';
import {connect} from 'react-redux';
import styles from './Login.module.scss';
import {
    followUser,
    setUpAllUsers,
    setUpCurrentPage,
    toggle_followingInProgress,
    toggle_isFetching, unfollowUser
} from '../../redux/usersReducer';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'

import {UsersAPIComponent} from '../Users/UsersAPIComponent';
import {loginUser} from '../../redux/authReducer';
import {RootState} from '../../redux/storeRedux';
import {Redirect} from 'react-router-dom';
import {log} from 'util';
import {HeaderLogo} from '../Header/HeaderLogo/HeaderLogo';
import logoRF from '../common/img/logo.png';


let LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {

    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit} className={styles.wrapper_form}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={RenderField}
                       validate={emailValidator}
                       type={'email'}
                       className={styles.field}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={'input'}
                       type={'password'}
                       className={styles.field}
                       validate={[required, maxLength30, minLength5]}/>
            </div>
            <div>Remember me
                <Field name={'rememberMe'}
                       component={'input'}
                       type={'checkbox'}/>
            </div>
            <button type="submit" disabled={submitting} className={styles.btn}>Log In</button>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.loginUser(formData)
    }
    const test = () => true
    // if (props.authorize) {
    //     return <Redirect to="/profile/12113"/>
    //
    // } else {


    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.headerLogo}>
                    <img src={logoRF} alt="Logo of header"/>
                </div>
                <h2>Connect with friends and the world around you on
                    Cirkle.</h2>
            </div>
            <div className={styles.loginForm}>
                <LoginReduxForm onSubmit={onSubmit}/>
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}>To log in get registered
                </a>
                <button type="submit" className={styles.btnFree}>Test account</button>
            </div>

        </div>)
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
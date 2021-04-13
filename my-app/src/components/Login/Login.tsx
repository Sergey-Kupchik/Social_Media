import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {emailValidator, maxLength30, minLength10, required} from '../util/validators';
import {RenderField} from '../common/RenderField/RenderField';
import {connect} from 'react-redux';
import styles from './Login.module.scss';
import {loginUser, loginTestUser} from '../../redux/authReducer';
import {RootState} from '../../redux/storeRedux';
import logoRF from '../common/img/logo.png';
import {getAuthorizedUser, getCaptchaURLValue} from '../util/reduxSelector';


const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, CaptchaType>> = (props) => {

    // @ts-ignore
    const {handleSubmit, pristine, reset, submitting, captcha} = props
    debugger
    return (
        <form onSubmit={handleSubmit} className={styles.wrapper_form}>
            <div className={`${styles.item}  ${styles.item_text}`}>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={RenderField}
                       validate={[required, emailValidator]}
                       type={'email'}
                       className={styles.field}/>
            </div>
            <div className={`${styles.item}  ${styles.item_text}`}>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={RenderField}
                       type={'password'}
                       className={styles.field}
                       validate={[required, maxLength30, minLength10]}/>
            </div>
            {captcha && <img src={captcha} alt="captcha"/>}
            {captcha && <div className={`${styles.item}  ${styles.item_text}`}>
                <Field
                    placeholder={'Type the word above:'}
                    name={'captcha'}
                    component={RenderField}
                    type={'text'}
                    className={styles.field}
                    validate={[required]}/>
            </div>}

            <div className={styles.item}>Remember me
                <Field name={'rememberMe'}
                       component={'input'}
                       type={'checkbox'}/>
            </div>


            <button type="submit" disabled={submitting} className={styles.btn}>Log In</button>
        </form>
    )
}


const LoginReduxForm = reduxForm<LoginFormDataType, CaptchaType>({form: 'login'})(LoginForm)

type CaptchaType = {
    captcha: string | null
}
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.loginUser(formData)
        debugger
    }
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
                <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>

                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'} className={styles.loginForm_link}>To log in get registered
                </a>
                <button type="submit" className={styles.btnFree} onClick={props.loginTestUser}>Test account</button>
            </div>
        </div>)
}

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
type DispatchPropsType = {
    loginUser: (data: LoginFormDataType) => Function
    loginTestUser: () => Function
}


// Types
type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type LoginPropsType = {
    loginUser: (data: LoginFormDataType) => Function
    loginTestUser: () => Function
    authorize?: boolean
    captcha: null | string
}


// mapStateToProps
const mapStateToProps = (state: RootState) => ({
    authorize: getAuthorizedUser(state),
    captcha: getCaptchaURLValue(state)
})


export const LoginContainer = connect<mapStateToPropsType, DispatchPropsType, {}, RootState>(mapStateToProps, {
    loginUser,
    loginTestUser
})(Login)
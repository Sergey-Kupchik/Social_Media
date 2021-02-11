import {ActionsTypes} from './state';
import {AuthAPI} from '../api/socialNetworkAPI';
import {Dispatch} from 'redux';
import {LoginFormDataType} from '../components/Login/Login';
import {stopSubmit} from 'redux-form';
import {authorizeUserSuccess} from './appReducer';
import {ThunkDispatch} from 'redux-thunk';


enum AUTH_REDUCER_ACTION_TYPE {
    SET_AUTH_REDUCER_USER_DATA,
    LOG_OUT_REDUCER_USER_DATA,
    TOGGLE_IS_FETCHING_REDUCER_USER_DATA,
}


// type of user data from server
export type AuthUserData = {
    id: null | string,
    login: null | string,
    email: null | string,
}

// action creator for set up to auth
export const setAuthUserData = (data: AuthUserData) => ({
    type: AUTH_REDUCER_ACTION_TYPE.SET_AUTH_REDUCER_USER_DATA,
    data,
} as const)

// action creator for log out from auth
export const logOutAuthUserData = () => ({
    type: AUTH_REDUCER_ACTION_TYPE.LOG_OUT_REDUCER_USER_DATA,
} as const)

// action creator for change IsFetching value in AuthReducer
export const toggleIsFetchingInAuthReducer = (isFetching: boolean) => ({
    type: AUTH_REDUCER_ACTION_TYPE.TOGGLE_IS_FETCHING_REDUCER_USER_DATA,
    isFetching,
} as const)

// type of auth state
interface AuthStateType extends AuthUserData {
    isAuth: boolean,
    isFetching: boolean,
}

export type LoginUserDispatchType = ThunkDispatch<any, any, any>

// initial state for first start authReducer
const authInitialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
}


export const authReducer = (state = authInitialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case AUTH_REDUCER_ACTION_TYPE.SET_AUTH_REDUCER_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }
        case AUTH_REDUCER_ACTION_TYPE.LOG_OUT_REDUCER_USER_DATA: {
            return {
                ...state,
                email: null,
                id: null,
                login: null,
                isAuth: false,
            }
        }
        case AUTH_REDUCER_ACTION_TYPE.TOGGLE_IS_FETCHING_REDUCER_USER_DATA: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

    }
    return state;
}

// Thunk Creators

// Check If current user authorized
export const setUserProfile = () => (dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>) => {
    dispatch(toggleIsFetchingInAuthReducer(true));
    (AuthAPI.authMe()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(res.data))
                dispatch(toggleIsFetchingInAuthReducer(false))
            } else {
                dispatch(logoutUser())
            }
        }))
    let a = (AuthAPI.authMe()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(res.data))
                dispatch(toggleIsFetchingInAuthReducer(false))
            } else {
                dispatch(logoutUser())
            }
        }))
    return a
}
// Authorize current user on the service
export const loginUser = (data: LoginFormDataType) => (dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>) => {
    AuthAPI.login(data).then((res) => {
        if (res.resultCode === 0) {
            dispatch(setUserProfile())

        } else {
            dispatch(stopSubmit('login', {
                email: res.messages,
            }))
        }
    }).catch((error) => {
        alert(error)
    })
}

// delete cookie of current user
export const logoutUser = () => (dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>) => {
    AuthAPI.logout().then((res) => {
            if (res.resultCode === 0) {
                dispatch(logOutAuthUserData())
                // dispatch(authorizeUserSuccess(false))
            } else {
                alert(`m from logoutUser authReducer ELSE ${res}`)
            }
        }
    ).catch((error) => {

        alert(`Im from logoutUser authReducer CATCH ${error}`)
    })

}


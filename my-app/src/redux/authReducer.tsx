import {ActionsTypes} from './state';
import {AuthAPI, ProfileAPI} from '../api/socialNetworkAPI';
import {Dispatch} from 'redux';
import {LoginFormDataType} from '../components/Login/Login';
import {stopSubmit} from 'redux-form';
import {authorizeUserSuccess} from './appReducer';
import {ThunkDispatch} from 'redux-thunk';


enum AUTH_REDUCER_ACTION_TYPE {
    SET_AUTH_REDUCER_USER_DATA="AUTH_REDUCER_ACTION_TYPE_SET_AUTH_REDUCER_USER_DATA",
    LOG_OUT_REDUCER_USER_DATA="AUTH_REDUCER_ACTION_TYPE_LOG_OUT_REDUCER_USER_DATA",
    TOGGLE_IS_FETCHING_REDUCER_USER_DATA="AUTH_REDUCER_ACTION_TYPE_TOGGLE_IS_FETCHING_REDUCER_USER_DATA",
    SET_USER_PHOTO="AUTH_REDUCER_ACTION_TYPE_SET_USER_PHOTO",
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

// action creator for get user photo
export const getAuthUserPhoto = (userPhoto: string|null) => ({
    type: AUTH_REDUCER_ACTION_TYPE.SET_USER_PHOTO,
    userPhoto,
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
export interface AuthStateType extends AuthUserData {
    isAuth: boolean,
    isFetching: boolean,
    userPhoto: null|string}

export type LoginUserDispatchType = ThunkDispatch<any, any, any>

// initial state for first start authReducer
const authInitialState:AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    userPhoto: null,
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
                userPhoto:null,
                isAuth: false,
            }
        }
        case AUTH_REDUCER_ACTION_TYPE.TOGGLE_IS_FETCHING_REDUCER_USER_DATA: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case AUTH_REDUCER_ACTION_TYPE.SET_USER_PHOTO:{
            return {
                ...state,
                userPhoto: action.userPhoto
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
    let promise = (AuthAPI.authMe()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(res.data))
                dispatch(toggleIsFetchingInAuthReducer(false))
            } else {
                dispatch(logoutUser())
            }
        }))
    return promise
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

// Get photo of authorized user for avatar
 export const downloadUserPhoto =(id:string )=>(dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>)=>{
     ProfileAPI.getUserProfile(id).then(p=>getAuthUserPhoto(p.photos.small))}



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


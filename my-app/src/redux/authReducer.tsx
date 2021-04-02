import {ActionsTypes} from './state';
import {AuthAPI, ProfileAPI} from '../api/socialNetworkAPI';
import {Dispatch} from 'redux';
import {LoginFormDataType} from '../components/Login/Login';
import {stopSubmit} from 'redux-form';
import {authorizeUserSuccess} from './appReducer';
import {ThunkDispatch} from 'redux-thunk';

// Types

// Types of type for action creators
enum actions {
    setUserData = 'cirkle/authReducer/SET_USER_DATA',
    logoutUser = 'cirkle/authReducer/LOG_OUT_USER',
    toggleIsFetching = 'cirkle/authReducer/TOGGLE_IS_FETCHING',
    setUserPhoto = 'cirkle/authReducer/SET_USER_PHOTO',
}

// Type of auth state
export interface AuthStateType extends AuthUserData {
    isAuth: boolean,
    isFetching: boolean,
    userPhoto: null | string
}

// Type of user data from server
export type AuthUserData = {
    id: null | string,
    login: null | string,
    email: null | string,
}
// Action creators

// Action creator for set up to auth
export const setAuthUserData = (data: AuthUserData) => ({
    type: actions.setUserData,
    payload: {data,}
} as const)

// action creator for get user photo
export const getAuthUserPhoto = (userPhoto: string | null) => {
    debugger
    return{type: actions.setUserPhoto,
        payload: {userPhoto,},
    }as const

}


// action creator for log out from auth
export const logOutAuthUserData = () => ({
    type: actions.logoutUser,
} as const)

// action creator for change IsFetching value in AuthReducer
export const toggleIsFetchingInAuthReducer = (isFetching: boolean) => ({
    type: actions.toggleIsFetching,
    payload: {isFetching,},
} as const)




// initial state for first start authReducer
const authInitialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    userPhoto: null,
}

// Reducer
export const authReducer = (state = authInitialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case actions.setUserData: {
            return {
                ...state,
                ...action.payload.data,
                isAuth: true,
            };
        }
        case actions.logoutUser: {
            return {
                ...state,
                email: null,
                id: null,
                login: null,
                userPhoto: null,
                isAuth: false,
            }
        }
        case actions.toggleIsFetching: {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }
        case actions.setUserPhoto: {
            debugger
            return {
                ...state,
                userPhoto: action.payload.userPhoto
            }
        }

    }
    return state;
}

// Helpers
 const  LoginUserTestFlow = async(data: LoginFormDataType, dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>)=>{
     let res = await AuthAPI.login(data)
     if (res.resultCode === 0) {
         dispatch(setUserProfile())
     } else {
         dispatch(stopSubmit('login', {
             email: 'Username or password is incorrect',
             password: 'Username or password is incorrect',
         }))
     }
}

// Thunk Creators

// Check If current user authorized
export const setUserProfile = () => async (dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>) => {
    dispatch(toggleIsFetchingInAuthReducer(true));
    let res = await AuthAPI.authMe()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(res.data))
        downloadUserPhoto(res.data.id)
        dispatch(toggleIsFetchingInAuthReducer(false))
    } else {
        dispatch(logoutUser())
    }
}
// Authorize current user on the service
export const loginUser = (data: LoginFormDataType) => async (dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>) => {
    await LoginUserTestFlow(data,dispatch)
}

// Authorize current user on the service
export const loginTestUser = () => async (dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>) => {
    let testData = {
        email: 'katsent@mail.ru',
        password: 'Minsk558451',
        rememberMe: false,
    }
    await LoginUserTestFlow(testData,dispatch)
}


// Get photo of authorized user for avatar
export const downloadUserPhoto = (id: string) =>async (dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>) => {
    dispatch(toggleIsFetchingInAuthReducer(true));
    let res = await ProfileAPI.getUserProfile(id)
        dispatch(getAuthUserPhoto(res.photos.small))
        dispatch(toggleIsFetchingInAuthReducer(false));
}


// delete cookie of current user
export const logoutUser = () => async (dispatch: ThunkDispatch<AuthStateType, void, ActionsTypes>) => {
    let res = await AuthAPI.logout()
    if (res.resultCode === 0) {
        dispatch(logOutAuthUserData())
    } else {
    }
}


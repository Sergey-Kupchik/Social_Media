import {ActionsTypes} from './state';
import {DialogsPagePropsType} from '../components/Dialogs/Dialogs';
import {v1} from 'uuid';
import {toggle_isFetching} from './usersReducer';
import {socialNetworkAPI} from '../api/socialNetworkAPI';
import {Dispatch} from 'redux';

enum AUTH_REDUCER_ACTION_TYPE {
    SET_AUTH_REDUCER_USER_DATA,
    LOG_OUT_REDUCER_USER_DATA,
    TOGGLE_IS_FETCHING_REDUCER_USER_DATA,
}


// export const SendMessageOrderAC = (Newmessage: string) => ({
//     type: SendMessageString,
//     message: Newmessage
// } as const);
//
// export const ShowMessageInTextareaAC = (newText: string) => ({
//     type: ShowMessageInTextareaString,
//     newText: newText
// } as const);


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


export const setUserProfile = () => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingInAuthReducer(true));
    socialNetworkAPI.authMe().then((data) => {
        dispatch(setAuthUserData(data))
        dispatch(toggleIsFetchingInAuthReducer(false))
    })
}
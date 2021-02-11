import {ActionsTypes} from './state';
import {AuthAPI} from '../api/socialNetworkAPI';
import {Dispatch} from 'redux';
import {LoginFormDataType} from '../components/Login/Login';
import {stopSubmit} from 'redux-form';
import {AddPostAC} from './profileReducer';
import {setUserProfile} from './authReducer';
import {ThunkDispatch} from 'redux-thunk';

// TYPES

// types of type for action creators
enum APP_ACTION_TYPE {
    AUTHORIZE = 'APP_REDUCER_ACTION_TYPE_AUTHORIZE_USER_ON_THE_NETWORK'
}

// type of authorizeUserSuccess action creator
type authorizeUserSuccessType = ReturnType<typeof authorizeUserSuccess>

// type of app state
type AppStateType = typeof initialState;

// type of all actions
type AppActionsTypes =
    | ReturnType<typeof authorizeUserSuccess>


//ACTION CREATOR

// action creator for set up to auth
export const authorizeUserSuccess = (authorize: boolean) => ({
    type: APP_ACTION_TYPE.AUTHORIZE,
    authorize,
} as const)

// initial state for first start appReducer
const initialState = {
    authorize: false,
}

// Reducer
export const appReducer = (state = initialState, action: AppActionsTypes): AppStateType => {
    switch (action.type) {
        case APP_ACTION_TYPE.AUTHORIZE: {
            return {
                ...state,
                authorize: action.authorize,
            };
        }
    }
    return state;
}

// Thunk Creators

// Check If current user authorized
export const authorizeUser = () => (dispatch: ThunkDispatch<AppStateType, void, AppActionsTypes>) => {
    dispatch(setUserProfile()).then((rest: any) => {
        dispatch(authorizeUserSuccess(true))
    })
}



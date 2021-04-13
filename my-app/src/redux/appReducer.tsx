import {setUserProfile} from './authReducer';
import {ThunkDispatch} from 'redux-thunk';

// Types

// Types of type for action creators
enum actions {
    authorize = 'cirkle/appReducer/UTHORIZE_USER_IN_THE_NETWORK',
    error = 'cirkle/appReducer/SET-ERROR'
}

// Type of authorizeUserSuccess action creator
type authorizeUserSuccessType = ReturnType<typeof authorizeUserSuccess>


// Type of app state
export type AppStateType = {
    authorize: boolean// to check if the user is authorized
    error: string | null // for global server error - we'll add an error here
}

// Type of all actions
type AppActionsTypes =
    | ReturnType<typeof authorizeUserSuccess>
    | ReturnType<typeof setAppErrorSuccess>


//Action Creators

// Action creator for set up to auth
export const authorizeUserSuccess = (authorize: boolean) => ({
    type: actions.authorize,
    payload: {
        authorize,
    }
} as const)

export const setAppErrorSuccess = (error: string | null) => ({
    type: actions.error,
    payload: {error,}
} as const)

// Initial state for first start appReducer
const initialState: AppStateType = {
    authorize: false,
    error: null,
}

// Reducer
export const appReducer = (state = initialState, action: AppActionsTypes): AppStateType => {
    switch (action.type) {
        case actions.authorize:
        case actions.error: {
            return {
                ...state,
                ...action.payload,
            };
        }
    }
    return state;
}

// Thunk Creators

// Check If current user authorized
export const authorizeUser = () => async (dispatch: ThunkDispatch<AppStateType, void, AppActionsTypes>) => {
    let rest = await dispatch(setUserProfile())
    dispatch(authorizeUserSuccess(true))
}



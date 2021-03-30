import {setUserProfile} from './authReducer';
import {ThunkDispatch} from 'redux-thunk';

// Types

// Types of type for action creators
enum actions {
    authorize = 'cirkle/appReducer/UTHORIZE_USER_IN_THE_NETWORK'
}

// Type of authorizeUserSuccess action creator
type authorizeUserSuccessType = ReturnType<typeof authorizeUserSuccess>

// Type of app state
export type AppStateType = typeof initialState;

// Type of all actions
type AppActionsTypes =
    | ReturnType<typeof authorizeUserSuccess>


//Action Creators

// Action creator for set up to auth
export const authorizeUserSuccess = (authorize: boolean) => ({
    type: actions.authorize,
    payload: {
        authorize,
    }
} as const)

// Initial state for first start appReducer
const initialState = {
    authorize: false,
}

// Reducer
export const appReducer = (state = initialState, action: AppActionsTypes): AppStateType => {
    switch (action.type) {
        case actions.authorize: {
            return {
                ...state,
                authorize: action.payload.authorize,
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



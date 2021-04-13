import {DialogsPagePropsType} from '../components/Dialogs/Dialogs';
import {PostsStatePropsType} from '../components/Profile/Profile';
import {
    AddPostAC,
    setNewProfile,
    setUserStatusSuccess,
    ShowPostTextInTextareaAC,
    showStatusTextInTextareaSuccess
} from './profileReducer';
import {SendMessage, ShowMessageInTextarea} from './dialogsReducer';
import {
    follow_userSUCCESS,
    set_users,
    set_users_currentPageSUCCESS,
    set_users_total_count,
    toggle_followingInProgress,
    toggle_isFetching,
    unfollow_userSUCCESS,
} from './usersReducer';
import {
    logOutAuthUserData,
    setAuthUserData,
    getAuthUserPhoto,
    toggleIsFetchingInAuthReducer,
    getCaptchaURLSuccess, getUserNameSuccess
} from './authReducer';
import {authorizeUserSuccess} from './appReducer';


export type StateType = {
    dialogsPage: DialogsPagePropsType
    profilePage: PostsStatePropsType
    sidebar: {}
}

export type DispatchType = (action: ActionsTypes) => void


export type ActionsTypes =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof ShowPostTextInTextareaAC>
    | ReturnType<typeof setNewProfile>
    | ReturnType<typeof showStatusTextInTextareaSuccess>
    | ReturnType<typeof setUserStatusSuccess>
    | ReturnType<typeof SendMessage>
    | ReturnType<typeof ShowMessageInTextarea>
    | ReturnType<typeof unfollow_userSUCCESS>
    | ReturnType<typeof follow_userSUCCESS>
    | ReturnType<typeof set_users>
    | ReturnType<typeof set_users_total_count>
    | ReturnType<typeof set_users_currentPageSUCCESS>
    | ReturnType<typeof toggle_isFetching>
    | ReturnType<typeof setNewProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof logOutAuthUserData>
    | ReturnType<typeof toggleIsFetchingInAuthReducer>
    | ReturnType<typeof toggle_followingInProgress>
    | ReturnType<typeof authorizeUserSuccess>
    | ReturnType<typeof getAuthUserPhoto>
    | ReturnType<typeof getUserNameSuccess>
    | ReturnType<typeof getCaptchaURLSuccess>


export type StoreType = {
    _state: StateType
    subscribe: (callback: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StateType
    dispatch: DispatchType
}

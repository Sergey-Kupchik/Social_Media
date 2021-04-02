import {RootState} from '../../redux/storeRedux';
import {DialogWithFriend} from '../Dialogs/Dialog/Dialog';
import {MessageType} from '../Dialogs/Message/Message';
import {ProfileType} from '../Profile/Profile';
import {UsersType} from '../../redux/usersReducer';

// SELECTORS

// For dialogs component

export const getDialoguesList = (state: RootState): DialogWithFriend[] => state.dialogsPage.dialogs
export const getMessagesList = (state: RootState): MessageType[] => state.dialogsPage.messages

// For header component

export const getRegisteredUserId = (state: RootState): string|null=>state.auth.id
export const getRegisteredUserLogin = (state: RootState): string|null => state.auth.login

export const getRegisteredUserPhoto = (state: RootState): string|null=> state.auth.userPhoto



// checking that the user is authorized in the app
export const getIsAuth = (state: RootState): boolean=>state.auth.isAuth

// checking IsFetching property (required to display data)
export const getIsFetching = (state: RootState): boolean=>state.auth.isFetching

// For profile component
export const getProfile = (state: RootState): ProfileType | null => state.profilePage.profile
export const getTextAreaForStatus = (state: RootState): string => state.profilePage.textAreaForUserStatus
export const getUserStatus = (state: RootState): string => state.profilePage.status


// For users component
export const getUsers = (state: RootState): Array<UsersType> =>state.usersPage.users

export const getTotalUsersCount = (state: RootState): number =>{
    return state.usersPage.totalCount
}
// checking how many the users will be on one page
export const getPageSize = (state: RootState): number =>{
    return state.usersPage.pageSize
}
// set the current page number in the user li
export const getCurrentPage = (state: RootState): number =>{
    return state.usersPage.currentPage
}

export const getIsFetchingUsers = (state: RootState): boolean=> state.usersPage.isFetching
export const getFriendsList = (state: RootState): Array<string>=> state.usersPage.followingInProgress


// check if the user is authorized in the application
export const getAuthorizedUser = (state: RootState): boolean=> state.app.authorize
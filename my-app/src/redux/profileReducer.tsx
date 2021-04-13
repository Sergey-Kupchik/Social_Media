import {PhotosType, ProfileType} from '../components/Profile/Profile';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {ProfileAPI} from '../api/socialNetworkAPI';
import post1 from '../assets/images/post_1.jpg';
import post2 from '../assets/images/post_2.jpg';
import post3 from '../assets/images/post_3.jpg';
import post4 from '../assets/images/post_4.jpg';
import {getAuthUserPhoto, setUserProfile} from './authReducer';
import {ProfileFormDataType} from '../components/Profile/ProfileInfo/ProfileForm/ProfileForm';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './storeRedux';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './appReducer';
import {stopSubmit} from 'redux-form';

// Types

// Types of type for action creators
export enum actions {
    addPost = 'cirkle/profileReducer/ADD-POST',
    showText = 'cirkle/profileReducer/SHOW-POST-IN-TEXTAREA',
    setNewProfile = 'cirkle/profileReducer/SET-NEW-PROFILE',
    showStatus = 'cirkle/profileReducer/SHOW-STATUS-IN-TEXTAREA',
    setUserStatus = 'cirkle/profileReducer/SET-USER-STATUS',
    setUserPhotoToPost = 'cirkle/profileReducer/SET-USER-PHOTO-TO-POST',
    setUserNameToPost = 'cirkle/profileReducer/SET-USER-NAME-TO-POST',
    likePost = 'cirkle/profileReducer/LIKE-TO-POST',
    changePhoto = 'cirkle/profileReducer/CHANGE-PHOTO',
    updateProfile = 'cirkle/profileReducer/UPDATE-PROFILE',
}

// Type of all actions
export type ProfileReducerActionsTypes =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof ShowPostTextInTextareaAC>
    | ReturnType<typeof setNewProfile>
    | ReturnType<typeof showStatusTextInTextareaSuccess>
    | ReturnType<typeof setUserStatusSuccess>
    | ReturnType<typeof setUserPhotoToPost>
    | ReturnType<typeof setUserNameToPost>
    | ReturnType<typeof likePost>
    | ReturnType<typeof changePhotoSuccess>
    | ReturnType<typeof updateProfileSuccess>

// Type of post
export type PostType = {
    id: string
    message: string
    likesCount: number
    img?: string
    time: string
    userId: string
    userPhoto: string | null
    userName: string
}
// Type of initial State
type ProfileStateType = {
    posts: Array<PostType>
    newPostInTextArea: string
    profile: ProfileType | null
    textAreaForUserStatus: string
    status: string
}


//Action Creators
//add new post action creator
export const AddPostAC = (userId: string, userName: string, userPhoto: string | null, newPost: string,) => ({
    type: actions.addPost,
    payload: {
        newPostValue: newPost,
        userPhoto,
        userId,
        userName,
    }
} as const);

//add like post action creator
export const likePost = (id: string) => ({
    type: actions.likePost,
    payload: {
        id
    }
} as const);

//update profile of registered user action creator
export const updateProfileSuccess = (profile: ProfileType) => ({
    type: actions.updateProfile,
    payload: {
        profile
    }
} as const);


//show post
export const ShowPostTextInTextareaAC = (newText: string) => ({
    type: actions.showText,
    payload: {
        newText
    }
} as const);


//set up like profile of user
export const setNewProfile = (profile: ProfileType) => ({
    type: actions.setNewProfile,
    payload: {
        profile,
    }
} as const);

//show status
export const showStatusTextInTextareaSuccess = (statusChanging: string) => ({
    type: actions.showStatus,
    payload: {
        statusChanging,
    }
} as const);

//change photo of user
export const changePhotoSuccess = (photo: PhotosType) => ({
    type: actions.changePhoto,
    payload: {
        photo,
    }
} as const);

//set up like status of user
export const setUserStatusSuccess = (status: string) => ({
    type: actions.setUserStatus,
    payload: {
        status,
    }
} as const);

//set up like photo of user to post
const setUserPhotoToPost = (userPhoto: string | null, userId: string) => ({
    type: actions.setUserPhotoToPost,
    payload: {
        userPhoto,
        userId,
    }
} as const);

//set up like name of user to post
const setUserNameToPost = (userName: string, userId: string) => ({
    type: actions.setUserNameToPost,
    payload: {
        userName,
        userId,
    }
} as const);

// Initial State
const profileInitialState: ProfileStateType = {
    posts: [
        {
            id: v1(),
            message: 'We are less than one month out from the start of the second annual 4x4x48 Challenge! I have already seen so many posts and stories about people training, raising money for their charity and encouraging other people to join in! We have created a website, gogginschallenge.com, which offers the details of the event as well as a registration form that should be submitted AFTER the completion of the Challenge. Please note that we will not use your information for any marketing purposes other than communications about the event itself. We have also designed a 4x4x48 t-shirt which is now available for pre-order until March 8 (link in bio). All profits from shirt sales will be donated to charity- the charity/ies will be announced following the completion of the Challenge. Please share the information about the Challenge with anyone who might be up for joining.In a world that is so divided, this is an opportunity to bring people together for the common goal of promoting physical and mental health as well as supporting many amazing charitable causes! And....it is free! No purchase necessary, just a commitment to yourself! I will be going live on IG at the start of each leg so please be sure to tune in! Stay hard!',
            likesCount: 234,
            img: post1,
            time: '1 hour ago',
            userPhoto: null,
            userId: '1064',
            userName: '',
        },
        {
            id: v1(),
            message: 'I just watched “I care a lot” on @netflix, and it is a WILD  movie. Never heard anything about it and started watching based on a preview that popped up. Best movie I’ve seen in a long while.',
            likesCount: 12,
            img: post2,
            time: '6 hour ago',
            userPhoto: null,
            userId: '1051',
            userName: '',
        },
        {
            id: v1(),
            message: 'Purus ut faucibus pulvinar elementum integer enim neque volutpat. Hendrerit dolor magna eget est. Quis blandit turpis cursus in hac habitasse platea dictumst. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Lacus vel facilisis volutpat est velit. Ornare arcu odio ut sem nulla pharetra diam sit amet. Pulvinar etiam non quam lacus suspendisse. Cursus sit amet dictum sit amet. Quisque non tellus orci ac auctor augue mauris augue. Et ultrices neque ornare aenean euismod.',
            likesCount: 432,
            img: post3,
            time: '1 day ago',
            userPhoto: null,
            userId: '1055',
            userName: '',
        },
        {
            id: v1(),
            message: 'Suspendisse sed nisi lacus sed viverra. Orci phasellus egestas tellus rutrum tellus pellentesque. Id eu nisl nunc mi ipsum. Habitant morbi tristique senectus et netus et. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Id donec ultrices tincidunt arcu. Consectetur a erat nam at lectus urna duis convallis convallis. Nec feugiat nisl pretium fusce id velit ut. Sapien eget mi proin sed libero enim sed faucibus. Adipiscing bibendum est ultricies integer quis. Nunc eget lorem dolor sed viverra',
            likesCount: 2,
            img: post4,
            time: '3 day ago',
            userId: '1056',
            userPhoto: null,
            userName: '',
        }
    ],
    newPostInTextArea: '',
    profile: null,
    textAreaForUserStatus: '',
    status: '',

}


// Reducer
export const profileReducer = (state: ProfileStateType = profileInitialState, action: ProfileReducerActionsTypes): ProfileStateType => {
    switch (action.type) {
        case actions.addPost: {
            return {
                ...state,
                posts: [{
                    id: v1(),
                    message: action.payload.newPostValue,
                    likesCount: 0,
                    time: 'Just Now',
                    userId: action.payload.userId,
                    userPhoto: action.payload.userPhoto,
                    userName: action.payload.userName
                }, ...state.posts],
                newPostInTextArea: ''
            }
        }
        case actions.showText: {
            return {
                ...state,
                newPostInTextArea: action.payload.newText
            };
        }
        case actions.setNewProfile: {
            return {
                ...state,
                profile: action.payload.profile
            }
        }
        case actions.showStatus: {
            return {
                ...state,
                textAreaForUserStatus: action.payload.statusChanging,
            }
        }
        case actions.setUserStatus: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case actions.setUserPhotoToPost: {
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.userId === action.payload.userId) {
                        p.userPhoto = action.payload.userPhoto
                    }
                    return p
                })
            }
        }
        case actions.setUserNameToPost: {
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.userId === action.payload.userId) {
                        p.userName = action.payload.userName
                    }
                    return p
                })
            }
        }
        case actions.updateProfile:

            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload.profile,
                }
            }

        case actions.changePhoto:

            return {
                ...state,
                //@ts-ignore
                profile: {
                    ...state.profile,
                    photos: action.payload.photo
                }
            }


        case actions.likePost: {
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.payload.id) {
                        p.likesCount = p.likesCount + 1
                    }
                    return p
                })
            }
        }
    }
    return state
}

// Thunk Creator
export const setUserStatus = (id: string) => async (dispatch: Dispatch) => {
    let status = await ProfileAPI.getUserStatus(id)
    dispatch(showStatusTextInTextareaSuccess(status))
    dispatch(setUserStatusSuccess(status))
}


// Get photo of user to post
export const getUserPhoto = (id: string) => async (dispatch: Dispatch) => {
    let profile = await ProfileAPI.getUserProfile(id)
    dispatch(setUserPhotoToPost(profile.photos.small, id))
}
// Get name of user to post
export const getUserName = (id: string) => async (dispatch: Dispatch) => {
    let profile = await ProfileAPI.getUserProfile(id)
    dispatch(setUserNameToPost(profile.fullName, id))
}


export const updateUserStatus = (status: string,) => async (dispatch: Dispatch) => {
    let data = await ProfileAPI.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(showStatusTextInTextareaSuccess(status))
        dispatch(setUserStatusSuccess(status))
    }
}

// get the profile information of user
export const getUserProfile = (id: string) => async (dispatch:
                                                         ThunkDispatch<AppStateType, void, ProfileReducerActionsTypes>) => {
    let res = await ProfileAPI.getUserProfile(id)
    dispatch(setNewProfile(res))
    dispatch(setUserStatus(res.userId))
}

export const changePhoto = (photo: File) => async (dispatch:
                                                       ThunkDispatch<AppStateType, void, ProfileReducerActionsTypes | ReturnType<typeof getAuthUserPhoto>>
) => {
    let res = await ProfileAPI.changePhoto(photo)
    if (res.resultCode === 0) {
        dispatch(changePhotoSuccess(res.data.photos))
        dispatch(getAuthUserPhoto(res.data.photos.small))
    }
}


//Thunk Creator for updating profile of registered user
export const updateProfile = (profile: ProfileFormDataType,) => async (dispatch: ThunkDispatch<AppStateType, void, ProfileReducerActionsTypes>, getState: () => RootState) => {
    const userId = getState().auth.id
    let data = {
        ...profile,
        userId
    }
    let res = await ProfileAPI.updateUserProfile(data)
    if (res.resultCode === 0) {
        if (userId !== null) {
            dispatch(getUserProfile(userId))
            dispatch(setUserProfile())
        }
    } else {
        // @ts-ignore
        dispatch(stopSubmit('profile', {
            fullName: 'Invalid url format for contacts'
        }))
        let a = Promise.reject(res.messages[0])
        debugger
        return a
    }
}


//generator of error object for updateProfile Thunk Creator use for validation
// const mistakesGenerator = (mistakesLis: String[]) => {
//     let errors = {}
//     let mistakes = mistakesLis.map((m) => {
//         let arr = m.split('(Contacts->')
//         let value = arr[0].substring(0, arr[0].length - 1)
//         let key = arr[1].substring(0, arr[1].length - 1)
//         return {[key]: value}
//     })
//     for (let i = 0; i < mistakes.length; i++) {
//         let key = Object.keys(mistakes[i])[0]
//         let value = mistakes[i][key]
//         // @ts-ignore
//         errors[key] = value
//     }
//     return errors
// }
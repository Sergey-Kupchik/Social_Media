import {ProfileType} from '../components/Profile/Profile';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {ProfileAPI} from '../api/socialNetworkAPI';
import post1 from '../assets/images/post_1.jpg';
import post2 from '../assets/images/post_2.jpg';
import post3 from '../assets/images/post_3.jpg';
import post4 from '../assets/images/post_4.jpg';

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
            userId: '1034',
            userName:"",
        },
        {
            id: v1(),
            message: 'I just watched “I care a lot” on @netflix, and it is a WILD  movie. Never heard anything about it and started watching based on a preview that popped up. Best movie I’ve seen in a long while.',
            likesCount: 12,
            img: post2,
            time: '6 hour ago',
            userPhoto: null,
            userId: '1051',
            userName:"",
        },
        {
            id: v1(),
            message: 'Purus ut faucibus pulvinar elementum integer enim neque volutpat. Hendrerit dolor magna eget est. Quis blandit turpis cursus in hac habitasse platea dictumst. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Lacus vel facilisis volutpat est velit. Ornare arcu odio ut sem nulla pharetra diam sit amet. Pulvinar etiam non quam lacus suspendisse. Cursus sit amet dictum sit amet. Quisque non tellus orci ac auctor augue mauris augue. Et ultrices neque ornare aenean euismod.',
            likesCount: 432,
            img: post3,
            time: '1 day ago',
            userPhoto: null,
            userId: '1055',
            userName:"",
        },
        {
            id: v1(),
            message: 'Suspendisse sed nisi lacus sed viverra. Orci phasellus egestas tellus rutrum tellus pellentesque. Id eu nisl nunc mi ipsum. Habitant morbi tristique senectus et netus et. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Id donec ultrices tincidunt arcu. Consectetur a erat nam at lectus urna duis convallis convallis. Nec feugiat nisl pretium fusce id velit ut. Sapien eget mi proin sed libero enim sed faucibus. Adipiscing bibendum est ultricies integer quis. Nunc eget lorem dolor sed viverra',
            likesCount: 2,
            img: post4,
            time: '3 day ago',
            userId: '1056',
            userPhoto: null,
            userName:"",
        }
    ],
    newPostInTextArea: '',
    profile: null,
    textAreaForUserStatus: '',
    status: '',

}
// Reducer

export const profileReducer = (state = profileInitialState, action: ProfileReducerActionsTypes): ProfileStateType => {
    switch (action.type) {
        case ProfileReducer.AddPOST: {
            return {
                ...state,
                posts: [{
                    id: v1(),
                    message: action.payload.newPostValue,
                    likesCount: 0,
                    time: 'Just Now',
                    userId: action.payload.userId,
                    userPhoto: action.payload.userPhoto,
                    userName:action.payload.userName
                }, ...state.posts],
                newPostInTextArea: ''
            }
        }
        case ProfileReducer.ShowTextInPostTextarea: {
            return {
                ...state,
                newPostInTextArea: action.text
            };
        }
        case ProfileReducer.SetNewProfile: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case ProfileReducer.ShowStatusTextInTextarea: {
            return {
                ...state,
                textAreaForUserStatus: action.statusChanging,
            }
        }
        case ProfileReducer.SetUserStatus: {
            return {
                ...state,
                status: action.status
            }
        }
        case ProfileReducer.SetUserPhotoToPost: {
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.userId === action.userId) {
                        p.userPhoto = action.userPhoto
                    }
                    return p
                })
            }
        }
        case ProfileReducer.SetUserNameToPost: {
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.userId === action.userId) {
                        p.userName = action.userName
                    }
                    return p
                })
            }
        }
        case ProfileReducer.LikePost:{
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.payload.id) {
                        p.likesCount=p.likesCount+1
                    }
                    return p
                })
            }
        }
    }
    return state
}




// Thunk Creator
export const setUserStatus = (id: string) => (dispatch: Dispatch) => {
    ProfileAPI.getUserStatus(id).then((status) => {
        dispatch(showStatusTextInTextareaSuccess(status))
        dispatch(setUserStatusSuccess(status))

    })

}


// Get photo of user to post
export const getUserPhoto = (id: string) => (dispatch: Dispatch) => {
    ProfileAPI.getUserProfile(id).then((profile) => {
        dispatch(setUserPhotoToPost(profile.photos.small, id))
    })
}
// Get name of user to post
export const getUserName = (id: string) => (dispatch: Dispatch) => {
    ProfileAPI.getUserProfile(id).then((profile) => {
        dispatch(setUserNameToPost(profile.fullName, id))
    })
}


export const updateUserStatus = (status: string,) => (dispatch: Dispatch) => {
    ProfileAPI.updateUserStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(showStatusTextInTextareaSuccess(status))
            dispatch(setUserStatusSuccess(status))
        }
    })

}


// get the profile information of user
export const getUserProfile = (id: string) => (dispatch: Dispatch<ProfileReducerActionsTypes | any>) => {
    ProfileAPI.getUserProfile(id).then((res) => {
            dispatch(setNewProfile(res))
            dispatch(setUserStatus(res.userId))

        }
    )
}




// Action creators

export const AddPostAC = (userId:string, userName:string,userPhoto:string|null,newPost: string,) => ({
    type: ProfileReducer.AddPOST,
    payload:{
        newPostValue: newPost,
        userPhoto,
        userId,
        userName,
    }
} as const);

export const likePost = (id: string) => ({
    type: ProfileReducer.LikePost,
    payload:{
        id
    }
} as const);


export const ShowPostTextInTextareaAC = (NewText: string) => ({
    type: ProfileReducer.ShowTextInPostTextarea,
    text: NewText
} as const);

export const setNewProfile = (profile: ProfileType) => ({
    type: ProfileReducer.SetNewProfile,
    profile,
} as const);

export const showStatusTextInTextareaSuccess = (statusChanging: string) => ({
    type: ProfileReducer.ShowStatusTextInTextarea,
    statusChanging,
} as const);

export const setUserStatusSuccess = (status: string) => ({
    type: ProfileReducer.SetUserStatus,
    status,
} as const);

const setUserPhotoToPost = (userPhoto: string | null, userId: string) => ({
    type: ProfileReducer.SetUserPhotoToPost,
    userPhoto,
    userId,
} as const);


const setUserNameToPost = (userName: string, userId: string) => ({
    type: ProfileReducer.SetUserNameToPost,
    userName,
    userId,
} as const);


// Types
export enum ProfileReducer {
    AddPOST = 'PROFILE-REDUCER-ADD-POST',
    ShowTextInPostTextarea = 'PROFILE-REDUCER-SHOW-POST-IN-TEXTAREA',
    SetNewProfile = 'PROFILE-REDUCER-SET-NEW-PROFILE',
    ShowStatusTextInTextarea = 'PROFILE-REDUCER-SHOW-STATUS-IN-TEXTAREA',
    SetUserStatus = 'PROFILE-REDUCER-SET-USER-STATUS',
    SetUserPhotoToPost = 'PROFILE-REDUCER-SET-USER-PHOTO-TO-POST',
    SetUserNameToPost = 'PROFILE-REDUCER-SET-USER-NAME-TO-POST',
    LikePost = 'PROFILE-REDUCER-ADD-LIKE-TO-POST',

}

export type ProfileReducerActionsTypes =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof ShowPostTextInTextareaAC>
    | ReturnType<typeof setNewProfile>
    | ReturnType<typeof showStatusTextInTextareaSuccess>
    | ReturnType<typeof setUserStatusSuccess>
    | ReturnType<typeof setUserPhotoToPost>
    | ReturnType<typeof setUserNameToPost>
    | ReturnType<typeof likePost>

export type PostType = {
    id: string
    message: string
    likesCount: number
    img?:string
    time:string
    userId:string
    userPhoto:string|null
    userName:string
}

type ProfileStateType = {
    posts: Array<PostType>
    newPostInTextArea: string
    profile: ProfileType | null
    textAreaForUserStatus: string
    status: string
}
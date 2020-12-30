import {PostsStatePropsType, ProfileType} from '../components/Profile/Profile';
import {v1} from 'uuid';

// Initial State

const profileInitialState: PostsStatePropsType = {
    posts: [
        {id: v1(), message: 'Hola Ladies', likesCount: 0},
        {id: v1(), message: 'How are you?', likesCount: 12},
        {id: v1(), message: 'I\'m glad to see you', likesCount: 432},
        {id: v1(), message: 'Or not', likesCount: 2}
    ],
    newPostInTextArea: '',
    profile: null,
    status: '',

}


// Reducer

export const profileReducer = (state = profileInitialState, action: ProfileReducerActionsTypes): PostsStatePropsType => {
    switch (action.type) {
        case ProfileReducer.AddPOST: {
            return {
                ...state,
                posts: [{id: v1(), message: action.newPostValue, likesCount: 0}, ...state.posts],
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
                status: action.status,
            }
        }
    }
    return state
}


// Thunk Creator

// Action creators

export const AddPostAC = (newPost: string) => ({
    type: ProfileReducer.AddPOST,
    newPostValue: newPost
} as const);

export const ShowPostTextInTextareaAC = (NewText: string) => ({
    type: ProfileReducer.ShowTextInPostTextarea,
    text: NewText
} as const);

export const setNewProfile = (profile: ProfileType) => ({
    type: ProfileReducer.SetNewProfile,
    profile,
} as const);

export const ShowStatusTextInTextareaSuccess = (status: string) => ({
    type: ProfileReducer.ShowStatusTextInTextarea,
    status,
} as const);


// Types
export enum ProfileReducer {
    AddPOST = 'PROFILE-REDUCER-ADD-POST',
    ShowTextInPostTextarea = 'PROFILE-REDUCER-SHOW-POST-IN-TEXTAREA',
    SetNewProfile = 'PROFILE-REDUCER-SET-NEW-PROFILE',
    ShowStatusTextInTextarea = 'PROFILE-REDUCER-SHOW-STATUS-IN-TEXTAREA',
}

export type ProfileReducerActionsTypes =
    | ReturnType<typeof AddPostAC>
    | ReturnType<typeof ShowPostTextInTextareaAC>
    | ReturnType<typeof setNewProfile>
    | ReturnType<typeof ShowStatusTextInTextareaSuccess>
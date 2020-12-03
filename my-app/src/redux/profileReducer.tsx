import {PostsStatePropsType, ProfileType} from '../components/Profile/Profile';
import {ActionsTypes} from './state';
import {v1} from 'uuid';

// export enum PROFILE_REDUCER_ACTIONS_TYPE {
//     SHOW_POST_IN_TEXTAREA = 'PROFILE-REDUCER-SHOW-POST-IN-TEXTAREA',
//     ADD_POST = 'PROFILE-REDUCER-ADD-POST',
//     SET_NEW_PROFILE = 'PROFILE-REDUCER-SET-NEW-PROFILE',
// }


export const ShowPoptInTextareaString = 'PROFILE-REDUCER-SHOW-POST-IN-TEXTAREA';
export const AddPostString = 'PROFILE-REDUCER-ADD-POST';
export const SetNewProfileString = 'PROFILE-REDUCER-SET-NEW-PROFILE';

export const AddPostAC = (newPost: string) => ({
    type: AddPostString,
    newPostValue: newPost}  as const);

export const ShowTextInTextareaAC = (NewText: string) => ({
    type: ShowPoptInTextareaString,
    text: NewText
} as const);

export const setNewProfile =(profile:ProfileType)=>({
    type: SetNewProfileString,
    profile,
} as const);


const profileInitialState: PostsStatePropsType = {
    posts: [
        {id: v1(), message: 'Hola Ladies', likesCount: 0},
        {id: v1(), message: 'How are you?', likesCount: 12},
        {id: v1(), message: 'I\'m glad to see you', likesCount: 432},
        {id: v1(), message: 'Or not', likesCount: 2}
    ],
    newPostInTextArea: '',
    profile: null,
}


export const profileReducer = (state = profileInitialState, action: ActionsTypes): PostsStatePropsType => {
    switch (action.type) {
        case AddPostString: {
            return {
                ...state,
                posts: [{id: v1(), message: action.newPostValue, likesCount: 0}, ...state.posts],
                newPostInTextArea: ''
            }
        }
        case ShowPoptInTextareaString: {
            return {
                ...state,
                newPostInTextArea: action.text
            };
        }
        case SetNewProfileString: {
            return {
                ...state,
                profile:action.profile
            }
        }
    }
    return state
}

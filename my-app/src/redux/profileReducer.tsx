import {PostsStatePropsType} from '../components/Profile/Profile';
import {ActionsTypes} from './state';
import {v1} from 'uuid';


const ShowPoptInTextareaString = 'SHOW-POST-IN-TEXTAREA';
const AddPostString = 'ADD-POST';

export const AddPostAC = (newPost: string) => ({type: AddPostString, newPostValue: newPost} as const);
export const ShowTextInTextareaAC = (NewText: string) => ({
    type: ShowPoptInTextareaString,
    text: NewText
} as const);


const profileInitialState: PostsStatePropsType = {
    posts: [
        {id: v1(), message: 'Hola Ladies', likesCount: 0},
        {id: v1(), message: 'How are you?', likesCount: 12},
        {id: v1(), message: 'I\'m glad to see you', likesCount: 432},
        {id: v1(), message: 'Or not', likesCount: 2}
    ],
    newPostInTextArea: ''
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
    }
    return state
}

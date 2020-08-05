import {PostsStatePropsType} from "../components/Profile/Profile";
import {ActionsTypes} from "./state";
import {v1} from "uuid";


const ShowPoptInTextareaString = "SHOW-POST-IN-TEXTAREA";
const AddPostString = "ADD-POST";

export const AddPostAC = () => ({type: AddPostString} as const);
export const ShowTextInTextareaAC = (NewText: string) => ({
    type: ShowPoptInTextareaString,
    text: NewText
} as const);


export const profileReducer = (state: PostsStatePropsType, action: ActionsTypes):PostsStatePropsType => {
    switch (action.type) {
        case AddPostString:
            let newPost = {id: v1(), message: state.newPostInTextArea, likesCount: 0}
            state.posts.unshift(newPost);
            state.newPostInTextArea = "";
            return state;
        case ShowPoptInTextareaString:
            state.newPostInTextArea = action.text;
            return state;
    }
    return state
}
export default 10;
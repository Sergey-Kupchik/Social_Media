import {DialogsPagePropsType} from "../components/Dialogs/Dialogs";
import {PostsStatePropsType} from "../components/Profile/Profile";
import {v1} from "uuid";

export type StatePropsType = {
    dialogsPage: DialogsPagePropsType
    profilePage:PostsStatePropsType
}
export type addPostType = ()=>void;

export type showTextInTextArea = (text:string) => void


let rerenderEntireTree = () =>{console.log("Hola lediase")}

let state:StatePropsType = {
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Mike"},
            {id: v1(), name: "Silas"},
            {id: v1(), name: "Mariana"},
            {id: v1(), name: "Jimmy"},
            {id: v1(), name: "Andy"},
            {id: v1(), name: "Delfin"}
        ],
        messages: [
            {id: v1(), message: "That's a good question! I'll find out"},
            {id: v1(), message: "I have the exact same question"},
            {id: v1(), message: "I have no clue"},
            {id: v1(), message: "Why don't we ask Alex?"},
            {id: v1(), message: "How should I know?"},
            {id: v1(), message: "How should I know?"}
        ],
    },
    profilePage: {
        posts: [
            {id: v1(), message: "Hola Ladies", likesCount: 0},
            {id: v1(), message: "How are you?", likesCount: 12},
            {id: v1(), message: "I'm glad to see you", likesCount: 432},
            {id: v1(), message: "Or not", likesCount: 2}
        ],
        newPostInTextArea: ""
    }
}

export const addMessage = (message:string)=>{
    let newMessage = {id: v1(), message:message};
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree();
}

export const addPost:addPostType = ()=>{
    let newPost = {id: v1(), message: state.profilePage.newPostInTextArea, likesCount: 0}
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostInTextArea = "";
    rerenderEntireTree();
}
export const showTextInTextArea = (text:string)=>{
    state.profilePage.newPostInTextArea = text;
    rerenderEntireTree();

}


export const subscriber=(callback:()=>void)=>{
    rerenderEntireTree=callback
}

export default state
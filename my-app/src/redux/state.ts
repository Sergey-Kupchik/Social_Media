import {DialogsPagePropsType} from "../components/Dialogs/Dialogs";
import {PostsStatePropsType} from "../components/Profile/Profile";
import {v1} from "uuid";

export type StatePropsType = {
    dialogsPage: DialogsPagePropsType
    profilePage: PostsStatePropsType
}

export type DispatchType = (action:any)=>void

type AddPostActionType={
    type: "ADD-POST"
}
type ShowTextInTextAreaActionType={
    type: "SHOW-TEXT-IN-TEXTAREA"
    text: string
}
type SendMessageActionType={
    type: "SEND-MESSAGE"
    message: string
}

export type ActionsTypes = AddPostActionType | ShowTextInTextAreaActionType | SendMessageActionType


export type StoreType = {
    _state: StatePropsType
    subscriber: (callback: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StatePropsType
    dispatch: DispatchType
}

const store: StoreType = {
    _state: {
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
    },
    subscriber(callback: () => void) {
        this._rerenderEntireTree = callback
    },
    _rerenderEntireTree() {
        console.log("state changed");
    },
    getState (){
        return this._state
    },
    dispatch (action){
        if (action.type ==="ADD-POST"){
            let newPost = {id: v1(), message: this._state.profilePage.newPostInTextArea, likesCount: 0}
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostInTextArea = "";
            this._rerenderEntireTree();
        } else if (action.type ==="SHOW-TEXT-IN-TEXTAREA"){
            this._state.profilePage.newPostInTextArea = action.text;
            this._rerenderEntireTree();
        } else if (action.type ==="SEND-MESSAGE") {
            let newMessage = {id: v1(), message: action.message};
            this._state.dialogsPage.messages.push(newMessage);
            this._rerenderEntireTree();
        }
    }
}


export default store;
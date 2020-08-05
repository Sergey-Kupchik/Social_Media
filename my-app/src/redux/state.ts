import {DialogsPagePropsType} from "../components/Dialogs/Dialogs";
import {PostsStatePropsType} from "../components/Profile/Profile";
import {v1} from "uuid";
import {AddPostAC, profileReducer, ShowTextInTextareaAC} from "./profileReducer";
import {dilogsReducer, ShowMessageInTextareaAC, SendMessageOrderAC} from "./dialogsReducer";



export type StateType = {
    dialogsPage: DialogsPagePropsType
    profilePage: PostsStatePropsType
    sidebar: {}
}

export type DispatchType = (action: ActionsTypes) => void


export type ActionsTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof ShowTextInTextareaAC>
    | ReturnType<typeof SendMessageOrderAC>
    | ReturnType<typeof ShowMessageInTextareaAC>


export type StoreType = {
    _state: StateType
    subscriber: (callback: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StateType
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
            newMessageInTextArea: ""
        },
        profilePage: {
            posts: [
                {id: v1(), message: "Hola Ladies", likesCount: 0},
                {id: v1(), message: "How are you?", likesCount: 12},
                {id: v1(), message: "I'm glad to see you", likesCount: 432},
                {id: v1(), message: "Or not", likesCount: 2}
            ],
            newPostInTextArea: ""
        },
        sidebar: {}
    },
    subscriber(callback: () => void) {
        this._rerenderEntireTree = callback
    },
    _rerenderEntireTree() {
        console.log("state changed");
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.dialogsPage=dilogsReducer(this._state.dialogsPage,action);
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._rerenderEntireTree();
    }
}


export default store;
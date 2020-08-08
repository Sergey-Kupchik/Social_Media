import {PostsStatePropsType} from "../components/Profile/Profile";
import {v1} from "uuid";
import {AddPostAC, profileReducer, ShowTextInTextareaAC} from "./profileReducer";
import {dilogsReducer, ShowMessageInTextareaAC, SendMessageOrderAC} from "./dialogsReducer";
import {sidebarReducer, SidebarType} from './sidebarReducer';
import {DialogWithFriend} from '../components/Dialogs/Dialog/Dialog';
import {MessageType} from '../components/Dialogs/Message/Message';


export type DialogsPageType = {
    dialogs: Array<DialogWithFriend>
    messages: Array<MessageType>
    newMessageInTextArea: string
}


export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: PostsStatePropsType
    sidebar: SidebarType
}

export type DispatchType = (action: ActionsTypes) => void


export type ActionsTypes =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof ShowTextInTextareaAC>
    | ReturnType<typeof SendMessageOrderAC>
    | ReturnType<typeof ShowMessageInTextareaAC>


export type OldStoreType = {
    _state: StateType
    subscribe: (callback: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: DispatchType
}

export type StoreType = {
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: DispatchType
}

const store: OldStoreType = {
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

    subscribe(callback: () => void) {
        debugger
        this._callSubscriber = callback
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.dialogsPage=dilogsReducer(this._state.dialogsPage,action);
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.sidebar=sidebarReducer(this._state.profilePage,action);
        this._callSubscriber();
    }
}


export default store;
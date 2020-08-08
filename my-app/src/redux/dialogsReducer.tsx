import {ActionsTypes, DialogsPageType} from './state';

import {v1} from "uuid";



const SendMessageString = "SEND-MESSAGE";

const ShowMessageInTextareaString = "SHOW-MESSAGE-IN-TEXTAREA";

const initialState:DialogsPageType = {
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
}

export const SendMessageOrderAC = (NewMessage: string) => ({
    type: SendMessageString,
    message: NewMessage
} as const);

export const ShowMessageInTextareaAC = (newText: string) => ({
    type: ShowMessageInTextareaString,
    newText: newText
} as const);


export const dilogsReducer = (state =initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case SendMessageString:
            let newMessage = {id: v1(), message: action.message};
            state.messages.push(newMessage);
            state.newMessageInTextArea="";
            return state;
        case ShowMessageInTextareaString:
            state.newMessageInTextArea = action.newText;
            return state;
    }
    return state;
}

export default 11;
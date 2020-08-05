import {ActionsTypes} from "./state";
import {DialogsPagePropsType} from "../components/Dialogs/Dialogs";
import {v1} from "uuid";


const SendMessageString = "SEND-MESSAGE";

const ShowMessageInTextareaString = "SHOW-MESSAGE-IN-TEXTAREA";

export const SendMessageOrderAC = (Newmessage: string) => ({
    type: SendMessageString,
    message: Newmessage
} as const);

export const ShowMessageInTextareaAC = (newText: string) => ({
    type: ShowMessageInTextareaString,
    newText: newText
} as const);


export const dilogsReducer = (state: DialogsPagePropsType, action: ActionsTypes): DialogsPagePropsType => {
    switch (action.type) {
        case SendMessageString:
            let newMessage = {id: v1(), message: action.message};
            state.messages.push(newMessage);
            return state;
        case ShowMessageInTextareaString:
            state.newMessageInTextArea = action.newText;
            return state;
    }
    return state;
}

export default 11;
import {ActionsTypes} from './state';
import {DialogsPagePropsType} from '../components/Dialogs/Dialogs';
import {v1} from 'uuid';


const SendMessageString = 'SEND-MESSAGE';

const ShowMessageInTextareaString = 'SHOW-MESSAGE-IN-TEXTAREA';

export const SendMessageOrderAC = (Newmessage: string) => ({
    type: SendMessageString,
    message: Newmessage
} as const);

export const ShowMessageInTextareaAC = (newText: string) => ({
    type: ShowMessageInTextareaString,
    newText: newText
} as const);


const dialoguesInitialState: DialogsPagePropsType = {
    dialogs: [
        {id: v1(), name: 'Mike'},
        {id: v1(), name: 'Silas'},
        {id: v1(), name: 'Mariana'},
        {id: v1(), name: 'Jimmy'},
        {id: v1(), name: 'Andy'},
        {id: v1(), name: 'Delfin'}
    ],
    messages: [
        {id: v1(), message: 'That\'s a good question! I\'ll find out'},
        {id: v1(), message: 'I have the exact same question'},
        {id: v1(), message: 'I have no clue'},
        {id: v1(), message: 'Why don\'t we ask Alex?'},
        {id: v1(), message: 'How should I know?'},
        {id: v1(), message: 'How should I know?'}
    ],
    newMessageInTextArea: ''
}


export const dilogsReducer = (state = dialoguesInitialState, action: ActionsTypes): DialogsPagePropsType => {
    switch (action.type) {
        case SendMessageString: {
            return {
                ...state,
                messages: [...state.messages,{id: v1(), message: action.message}],
                newMessageInTextArea: ''
            };
        }
        case ShowMessageInTextareaString: {

            return {
                ...state,
                newMessageInTextArea: action.newText
            };
        }

    }
    return state;
}



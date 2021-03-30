import {ActionsTypes} from './state';
import {DialogsPagePropsType} from '../components/Dialogs/Dialogs';
import {v1} from 'uuid';

// Types

// Types of type for action creators
enum actions {
    sendMessage = 'cirkle/dilogsReducer/SEND_MESSAGE',
    showMessage='cirkle/dilogsReducer/SHOW-MESSAGE-IN-TEXTAREA',
}


//Action Creator

// Action creator for sending message
export const SendMessage = (newMessage: string) => ({
    type: actions.sendMessage,
    payload: {
        newMessage,
    }
} as const);

// Action creator for showing message
export const ShowMessageInTextarea = (newText: string) => ({
    type: actions.showMessage,
    payload: {
        newText,
    }
} as const);

// Initial state for first start dialoguesReducer
const dialoguesInitialState: DialogsPagePropsType = {
    dialogs: [
        {id: v1(), name: 'Mike'},
        {id: v1(), name: 'Silas'},
        {id: v1(), name: 'Mariana'},
        {id: v1(), name: 'Jimmy'},
        {id: v1(), name: 'Andy'},
        {id: v1(), name: 'Delfin'},
        {id: v1(), name: 'Silas'},
        {id: v1(), name: 'Mariana'},
        {id: v1(), name: 'Jimmy'},
        {id: v1(), name: 'Andy'},
        {id: v1(), name: 'Delfin'},
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
        case actions.sendMessage: {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.payload.newMessage}],
                newMessageInTextArea: ''
            };
        }
        case actions.showMessage: {
            return {
                ...state,
                newMessageInTextArea: action.payload.newText
            };
        }
    }
    return state;
}



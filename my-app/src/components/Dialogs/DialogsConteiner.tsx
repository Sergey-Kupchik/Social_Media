import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from './Message/Message';
import Dialog, {DialogWithFriend} from "./Dialog/Dialog";
import {DispatchType, StoreType, ActionsTypes} from '../../redux/state';
import {SendMessageOrderAC, ShowMessageInTextareaAC} from "../../redux/dialogsReducer";
import { Dialogs } from './Dialogs';



type DialoguesContainerPropsType = {
    store: StoreType
}

export const DialoguesContainer: React.FC<DialoguesContainerPropsType> = (props) => {
    const dialogues = props.store.getState.bind(props.store)().dialogsPage.dialogs;
    const messages = props.store.getState.bind(props.store)().dialogsPage.messages;

    const onSendMessage = (newMessage: string)=>{
        let action:ActionsTypes=SendMessageOrderAC(newMessage)
        props.store.dispatch(action);
    }

    const ShowMessageInTextarea=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.store.dispatch(ShowMessageInTextareaAC(e.currentTarget.value));
    }

    const textareaValue = props.store.getState.bind(props.store)().dialogsPage.newMessageInTextArea

    return (
        <Dialogs dialogs={dialogues} messages={messages} onSendMessage={onSendMessage} ShowMessageInTextarea={ShowMessageInTextarea} textareaValue={textareaValue}/>
    )
}

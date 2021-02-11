import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from './Message/Message';
import Dialog, {DialogWithFriend} from './Dialog/Dialog';
import {SendMessageOrderAC} from '../../redux/dialogsReducer';
import {SendMessageForm} from './SendMessageForm';

export type DialogsPagePropsType = {
    dialogs: Array<DialogWithFriend>
    messages: Array<MessageType>
    newMessageInTextArea: string
}


export type DialogsType2 = {
    dialoguesList: DialogWithFriend[]
    messagesList: MessageType[]
    sendMessage: (message: string) => void
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    messageStartAreaValue: string
}


export const Dialogs: React.FC<DialogsType2> = (props) => {

    let dialoguesList = props.dialoguesList.map(d => <Dialog id={d.id} name={d.name} key={d.id}/>);
    let messagesList = props.messagesList.map(m => <Message id={m.id} message={m.message} key={m.id}/>);

    let messageElementRef = React.createRef<HTMLTextAreaElement>();

    const onClick = () => {
        if (messageElementRef.current && messageElementRef.current.value.trim() !== '') {
            let NewMessage = messageElementRef.current.value;
            props.sendMessage(NewMessage);
        }
    }
    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div className={styles.dialogs}>

            <div className={styles.messages}>
                {messagesList}
                <SendMessageForm sendMessage={props.sendMessage}/>
            </div>

            <div className={styles.dialogsItem}>
                {dialoguesList}
            </div>
        </div>)
}
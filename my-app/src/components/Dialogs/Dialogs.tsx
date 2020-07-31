import React, {KeyboardEvent} from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from './Message/Message';
import Dialog, {DialogWithFriend} from "./Dialog/Dialog";
import {DispatchType} from '../../redux/state';

export type DialogsPagePropsType = {
    dialogs: Array<DialogWithFriend>
    messages: Array<MessageType>
}

type DialogsType = {
    stateForDialogsPage: DialogsPagePropsType
    dispatch: DispatchType
}

const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogesList = props.stateForDialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    let messagesList = props.stateForDialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>);
    let messageElementRef = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        if (messageElementRef.current && messageElementRef.current.value.trim() !== "") {
            let textOfNewMessage = messageElementRef.current.value;
            let action = {
                type:"SEND-MESSAGE",
                message: textOfNewMessage
            }
            props.dispatch(action);
            messageElementRef.current.value = "";
        }
    }
    const onKeyPress=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        debugger
        if (e.key==="Enter"){
            sendMessage();
        }
    }

    return (<div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
            {dialogesList}
        </div>
        <div className={styles.messages}>
            {messagesList}
            <textarea ref={messageElementRef} className={styles.text} onKeyPress={onKeyPress}></textarea>
            <div>
                <button onClick={sendMessage} className={styles.button}>Send</button>
            </div>
        </div>
    </div>)
}
export default Dialogs;
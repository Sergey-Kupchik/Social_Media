import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from './Message/Message';
import Dialog, {DialogWithFriend} from "./Dialog/Dialog";
import {DispatchType, SendMessageOrderAC, ShowMessageInTextareaAC} from '../../redux/state';

export type DialogsPagePropsType = {
    dialogs: Array<DialogWithFriend>
    messages: Array<MessageType>
    newMessageInTextArea: string
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
            let NewMessage = messageElementRef.current.value;
            let action=SendMessageOrderAC(NewMessage)
            props.dispatch(action);
            props.stateForDialogsPage.newMessageInTextArea=""
        }
    }
    const onKeyPress=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key==="Enter"){
            sendMessage();
        }
    }
    const onChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{

        console.log(props.stateForDialogsPage.newMessageInTextArea)
        props.dispatch(ShowMessageInTextareaAC(e.currentTarget.value));
        console.log(props.stateForDialogsPage.newMessageInTextArea)
    }

    return (<div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
            {dialogesList}
        </div>
        <div className={styles.messages}>
            {messagesList}
            <textarea ref={messageElementRef}
                      className={styles.text}
                      onKeyPress={onKeyPress}
                      value={props.stateForDialogsPage.newMessageInTextArea}
                      onChange={onChange}
            ></textarea>
            <div>
                <button onClick={sendMessage} className={styles.button}>Send</button>
            </div>
        </div>
    </div>)
}
export default Dialogs;
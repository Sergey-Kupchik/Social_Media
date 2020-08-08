import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from './Message/Message';
import Dialog, {DialogWithFriend} from './Dialog/Dialog';



type DialogsType = {
    dialogs: Array<DialogWithFriend>
    messages: Array<MessageType>
    onSendMessage: (newMessage: string) => void
    ShowMessageInTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void
    textareaValue: string
}

export const Dialogs: React.FC<DialogsType> = (props) => {
    const dialoguesList = props.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    const messagesList = props.messages.map(m => <Message id={m.id} message={m.message}/>);

    const messageElementRef = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        if (messageElementRef.current && messageElementRef.current.value.trim() !== '') {
            let newMessage = messageElementRef.current.value;
            props.onSendMessage(newMessage)
        }
    }
    const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.ShowMessageInTextarea(e);
    }

    return (<div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
            {dialoguesList}
        </div>
        <div className={styles.messages}>
            {messagesList}
            <textarea ref={messageElementRef}
                      className={styles.text}
                      onKeyPress={onKeyPress}
                      value={props.textareaValue}
                      onChange={onChange}
            ></textarea>
            <div>
                <button onClick={sendMessage} className={styles.button}>Send</button>
            </div>
        </div>
    </div>)
}

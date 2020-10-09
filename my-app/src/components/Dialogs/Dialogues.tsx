import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Dialogues.module.css';
import Message, {MessageType} from './Message/Message';
import Dialogue, {DialogWithFriend} from './Dialog/Dialogue';


type DialogsType = {
    dialogs: Array<DialogWithFriend>
    messages: Array<MessageType>
    onSendMessage: (newMessage: string) => void
    ShowMessageInTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void
    textareaValue: string
}

export const Dialogues: React.FC<DialogsType> = (props) => {
    const dialoguesList = props.dialogs.map(d => <Dialogue id={d.id} name={d.name} key={d.id}/>);
    const messagesList = props.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>);

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

    return (
        <div className={styles.dialogsApp}>
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
            <div className={styles.usersList}>
                {dialoguesList}
            </div>
        </div>)
}

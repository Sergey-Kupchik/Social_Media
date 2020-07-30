import React from 'react';
import styles from './Dialogs.module.css';
import Message, {MessageType} from './Message/Message';
import Dialog, {DialogWithFriend} from "./Dialog/Dialog";

export type DialogsPagePropsType = {
    dialogs: Array<DialogWithFriend>
    messages: Array<MessageType>
}

type DialogsType = {
    state: DialogsPagePropsType
    addMessage:(message:string)=>void
}

const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogesList = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    let messagesList = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);
    let messageElementRef = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        if (messageElementRef.current && messageElementRef.current.value.trim() !== "") {
            let textOfNewMessage = messageElementRef.current.value;
            props.addMessage(textOfNewMessage);
            console.log(props.state.messages)
            messageElementRef.current.value = "";
        }
    }

    return (<div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
            {dialogesList}
        </div>
        <div className={styles.messages}>
            {messagesList}
            <textarea ref={messageElementRef} className={styles.text}></textarea>

            <div>
                <button onClick={sendMessage} className={styles.button}>Send</button>
            </div>
        </div>
    </div>)
}
export default Dialogs;
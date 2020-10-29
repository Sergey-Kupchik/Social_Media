import React from 'react';
import styles from './../Dialogs.module.css';

export type MessageType = {
    id: string
    message: string | number
}
const Message: React.FC<MessageType> = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Message;
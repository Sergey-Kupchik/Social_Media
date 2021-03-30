import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Dialogs.module.scss';
import Message, {Message2, MessageType} from './Message/Message';
import Dialog, {DialogWithFriend} from './Dialog/Dialog';
import {SendMessage} from '../../redux/dialogsReducer';
import {SendMessageForm} from './SendMessageForm';
import {UserButton} from '../Header/NavBar/UserButton/UserButton';

import  backgroundImg from '../../assets/images/backgroundPost.jpg';
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

    let dialoguesList = props.dialoguesList.map(d => <UserButton isAuth={true} registeredUserLogin={d.name} registeredUserId={d.id}  userPhoto={"https://iqonic.design/themes/socialv/html/images/user/1.jpg"} key={d.id}/>);
    // let messagesList = props.messagesList.map(m => <Message id={m.id} message={m.message} key={m.id}/>);
    let messagesList = props.messagesList.map(m => <Message2 id={m.id} message={m.message} key={m.id} data={'nov'}
                                                             userPhoto={null} position={''}/>);

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

    // return (
    //     <div className={styles.dialogs}>
    //
    //         <div className={styles.messages}>
    //             {messagesList}
    //             <SendMessageForm sendMessage={props.sendMessage}/>
    //         </div>
    //
    //         {/*<div className={styles.dialogsItem}>*/}
    //         {/*    {dialoguesList}*/}
    //         {/*</div>*/}
    //     </div>)
// }

    const divStyle = {
        backgroundImage: 'url(' + backgroundImg+ ')',
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <UserButton isAuth={true} userPhoto={"https://iqonic.design/themes/socialv/html/images/user/1.jpg"} registeredUserId={"https://iqonic.design/themes/socialv/html/images/user/1.jpg"} registeredUserLogin={"@iguefsd"}/>
            </div>
            <div className={styles.main}>
                <div className={styles.sideBar}>
                    <div className={styles.sideBar_title}>Following</div>
                    {dialoguesList}
                </div>
                <div className={styles.dialogsContainer}>
                    <div className={styles.dialogs} style={divStyle}>
                        {/*{messagesList}*/}
                    </div>
                    <div className={styles.dialogsFooter}>
                        {/*<SendMessageForm sendMessage={props.sendMessage}/>*/}
                    </div>
                </div>
            </div>


            {/*<div className={styles.dialogsItem}>*/}
            {/*    {dialoguesList}*/}
            {/*</div>*/}
        </div>)
}
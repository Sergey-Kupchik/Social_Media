import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../Dialogues.module.css';
import { FaUserFriends } from "react-icons/fa";


export type DialogWithFriend = {
    id: string
    name: string
}
const Dialogue: React.FC<DialogWithFriend> = (props) => {
    return (<div className={styles.dialog}>
        <NavLink to={'/dialogs/' + props.id}>
            <FaUserFriends className={styles.friends_avatar}/>
            <span>{props.name}</span>
        </NavLink>
    </div>)
}

export default Dialogue;
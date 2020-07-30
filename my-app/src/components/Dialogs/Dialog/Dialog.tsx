import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './../Dialogs.module.css';


export type DialogWithFriend = {
    id: string
    name: string
}
const Dialog: React.FC<DialogWithFriend> = (props) => {
    return <div className={styles.dialog}><NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink></div>
}

export default Dialog;
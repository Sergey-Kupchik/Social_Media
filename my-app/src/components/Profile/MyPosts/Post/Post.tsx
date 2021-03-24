import React, {useState} from 'react';
import styles from './Post.module.scss';
import {UserButton} from '../../../Header/NavBar/UserButton/UserButton';
import { GiWorld } from "react-icons/gi";
import { AiTwotoneLike } from "react-icons/ai";
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
    img?:string
    time:string
    userId:string
    userPhoto:string|null
    userName:string
    likePost: (id: string) => void
}

export const Post = React.memo(function Post(props: PostPropsType) {
    let[disabledLikeBtn, setDisabledLikeBtn]=useState<boolean>(false)
    debugger
    const onLikePost = ()=>{
        if(disabledLikeBtn){
            return
        }
      else  props.likePost(props.id);
        debugger
        setDisabledLikeBtn(true)

    };

    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <UserButton isAuth={true} registeredUserId={props.userId} registeredUserLogin={props.userName} userPhoto={props.userPhoto}/>
            <ul className={styles.entry_meta}>
                <GiWorld/>
                <li className={styles.meta_privacy}>Public</li>
                <li className={styles.meta_time}>_{props.time} </li>
            </ul>
        </div>
        <div className={styles.content_container}>
            <p className={styles.content}>{props.message}</p>
            <div className={styles.content_img} style={props.userPhoto?{}:{display:"none"}}>
                <img src={props.img} alt="Photo of post"/>
            </div>
        </div>
        <div className={styles.footer}>
            <button className={styles.footer_main} onClick={onLikePost} disabled={false}> <AiTwotoneLike /> <span>React!</span></button>
            <span>Likes {props.likesCount}</span>
        </div>
    </div>
})
import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";



type MyPostsPropsType = {
    publishNewPost: ()=>void
    onChange: (e: ChangeEvent<HTMLTextAreaElement>)=>void
    onKeyPress: (e: KeyboardEvent<HTMLTextAreaElement>)=>void
    valueForPost: string
    listOfPosts: PostType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    return (
        <div>
            New post
            <div>
                <div><textarea className={styles.text} ref={newPostElement} value={props.valueForPost}
                               onChange={props.onChange} onKeyPress={props.onKeyPress}></textarea></div>
                <div>
                    <button className={styles.button} onClick={props.publishNewPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {props.listOfPosts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}
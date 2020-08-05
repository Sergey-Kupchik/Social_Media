import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";
import {DispatchType} from "../../../redux/state";
import {AddPostAC, ShowTextInTextareaAC} from "../../../redux/profileReducer";


type MyPostsPropsType = {
    postsState: Array<PostType>
    textAreaState: string
    dispatch: DispatchType

}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const publishNewPost = () => {
        props.dispatch(AddPostAC())
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ShowTextInTextareaAC(e.currentTarget.value));
    }

    const onKeyPress=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key==="Enter"){
            publishNewPost();
        }
    }

    return (
        <div>
            New post
            <div>
                <div><textarea className={styles.text} ref={newPostElement} value={props.textAreaState}
                               onChange={onChange} onKeyPress={onKeyPress}></textarea></div>
                <div>
                    <button className={styles.button} onClick={publishNewPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {props.postsState.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}
export default MyPosts;
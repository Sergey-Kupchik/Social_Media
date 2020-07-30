import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";


type MyPostsPropsType = {
    postsState: Array<PostType>
    addPost: () => void
    textAreaState: string
    showTextInTextArea: (text: string) => void

}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const publishNewPost = () => {props.addPost()}

     const onChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        let text = e.currentTarget.value;
         props.showTextInTextArea(e.currentTarget.value);
     }

    return (
        <div>
            New post
            <div>
                <div><textarea className={styles.text} ref={newPostElement} value={props.textAreaState} onChange={onChange}></textarea></div>
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
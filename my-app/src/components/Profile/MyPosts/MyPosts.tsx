import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import {AddPostAC} from '../../../redux/profileReducer';
import {PostForm} from './PostForm';


type MyPostsPropsType = {
    showTextInTextarea: (e: ChangeEvent<HTMLTextAreaElement>)=>void
    addNewPost:(newPostValue: string)=>void
    textAreaState: string
    posts: Array<PostType>
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();


    const onClick = () => {
        if (newPostElement.current && newPostElement.current.value.trim() !== "") {
            let newPost = newPostElement.current.value;

            props.addNewPost(newPost);
        }
    }



    const onKeyPress=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key==="Enter"){
            onClick();
        }
    }

    return (
        <div>
            <PostForm addNewPost={props.addNewPost}/>

            <div className={styles.posts}>
                {props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>)}
            </div>
        </div>
    )
}
//     return (
//         <div>
//             New post
//             <div>
//                 <div><textarea className={styles.text} ref={newPostElement} value={props.textAreaState}
//                                onChange={props.showTextInTextarea} onKeyPress={onKeyPress}></textarea></div>
//                 <div>
//                     <button className={styles.button} onClick={onClick}>Add post</button>
//                 </div>
//             </div>
//
//             <div className={styles.posts}>
//                 {props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>)}
//             </div>
//         </div>
//     )
// }



export default MyPosts;
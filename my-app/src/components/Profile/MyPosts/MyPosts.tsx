import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './MyPosts.module.scss';
import {AddPostForm} from './AddPostForm';
import PostContainer from './Post/PostContainer';
import {PostType} from '../../../redux/profileReducer';


type MyPostsPropsType = {
    showTextInTextarea: (e: ChangeEvent<HTMLTextAreaElement>)=>void
    addNewPost:(newPostValue: string)=>void
    textAreaState: string
    posts: Array<PostType>
}


function Ma() {

}

const MyPosts =React.memo(function MyPosts(props:MyPostsPropsType) {

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
            <AddPostForm addNewPost={props.addNewPost}/>
            <div className={styles.posts}>
                {props.posts.map(p => <PostContainer id={p.id} message={p.message} likesCount={p.likesCount} key={p.id} img={p.img} time={p.time} userId={p.userId} userPhoto={p.userPhoto} userName={p.userName}/> )}
            </div>
        </div>
    )
})

export default MyPosts;
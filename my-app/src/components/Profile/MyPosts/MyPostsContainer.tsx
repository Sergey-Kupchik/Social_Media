import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import {DispatchType, StoreType} from '../../../redux/state';
import {AddPostAC, ShowTextInTextareaAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


type MyPostsConteinerPropsType = {
    store:StoreType
}

const MyPostsConteiner: React.FC<MyPostsConteinerPropsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const publishNewPost = () => {
        props.store.dispatch(AddPostAC())
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(ShowTextInTextareaAC(e.currentTarget.value));
    }

    const onKeyPress=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key==="Enter"){
            publishNewPost();
        }
    }

    return (
        <MyPosts postsState={} textAreaState={} dispatch={}/>
    )
}
export default 12;
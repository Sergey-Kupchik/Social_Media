import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {DispatchType, StoreType} from '../../redux/state';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


type ProfilePropsType = {
    postsState:PostsStatePropsType
    dispatch: DispatchType
}

export type PostsStatePropsType = {
    posts: Array<PostType>
    newPostInTextArea:string

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsState={props.postsState.posts} textAreaState={props.postsState.newPostInTextArea} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;
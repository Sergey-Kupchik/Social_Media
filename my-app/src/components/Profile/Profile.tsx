import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";


type ProfilePropsType = {
    postsState:PostsStatePropsType
    addPost: () => void
    showTextInTextArea: (text: string) => void
}

export type PostsStatePropsType = {
    posts: Array<PostType>
    newPostInTextArea:string

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsState={props.postsState.posts} addPost={props.addPost} textAreaState={props.postsState.newPostInTextArea} showTextInTextArea={props.showTextInTextArea}/>
        </div>
    )
}
export default Profile;
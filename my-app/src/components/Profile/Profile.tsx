import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {MyPostsContainer} from './MyPosts/MyPostsConteiner';


type ProfilePropsType = {
    // store: StoreRedusType

}

export type PostsStatePropsType = {
    posts: Array<PostType>
    newPostInTextArea:string

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
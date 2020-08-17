import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {DispatchType, StoreType} from '../../redux/state';
import {MyPostsConteiner} from './MyPosts/MyPostsContainer';



type ProfilePropsType = {
    // store: StoreType
}

type PostsStatePropsType={}


const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsConteiner/>
        </div>
    )
}
export default Profile;
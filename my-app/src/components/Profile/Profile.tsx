import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {MyPostsContainer} from './MyPosts/MyPostsConteiner';


export type ProfilePropsType = {
    profile: ProfileType | null

}

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | null,
        large: string | null,
    },
}



export type PostsStatePropsType = {
    posts: Array<PostType>
    newPostInTextArea:string
    profile: ProfileType | null
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
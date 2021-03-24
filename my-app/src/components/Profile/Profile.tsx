import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {Preloader} from '../common/Preloader/Preloader';
import styles from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsConteiner';
import {PostType} from '../../redux/profileReducer';


export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    textAreaForUserStatus: string
    showStatusTextInTextareaSuccess: (statusChanging: string) => void
    updateUserStatus: (status: string,) =>void
    authorizedUserID: string

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
    fullName: string ,
    userId: string
    photos: {
        small: string | null,
        large: string | null,
    },
}



export type PostsStatePropsType = {
    posts: Array<PostType>
    newPostInTextArea:string
    profile: ProfileType | null
    textAreaForUserStatus:string
    status: string
    authorizedUserID: string
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    if (!props.profile) {
        return <div className={styles.container}><Preloader/></div>
    } else return (
        <div className={styles.wrapper}>
            <ProfileInfo profile={props.profile} status={props.status} textAreaForUserStatus={props.textAreaForUserStatus}  showStatusTextInTextareaSuccess={props.showStatusTextInTextareaSuccess} updateUserStatus={props.updateUserStatus} authorizedUserID={props.authorizedUserID}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
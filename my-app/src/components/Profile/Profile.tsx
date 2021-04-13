import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {Preloader} from '../common/Preloader/Preloader';
import styles from './Profile.module.scss';
import MyPostsContainer from './MyPosts/MyPostsConteiner';
import {ProfileFormDataType} from './ProfileInfo/ProfileForm/ProfileForm';


export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string,) =>void
    updateProfile: (profile: ProfileFormDataType) => Promise<string>| void
    changePhoto: (photo: File) =>void
    authorizedUserID: string
    isOwner:boolean
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
    fullName: string
    userId: string
    photos: PhotosType
}

export type  PhotosType = {
    small: string | null
    large: string | null
}


export type PostsStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserID: string

}

const Profile: React.FC<ProfilePropsType> = (props) => {

    if (!props.profile) {
        return <div className={styles.container}><Preloader/></div>
    } else return (
        <div className={styles.wrapper}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
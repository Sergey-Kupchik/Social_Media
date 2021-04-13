import React, {ChangeEvent, useState} from 'react';
import styles from './ProfileInfo.module.scss';
import {ProfilePropsType, ProfileType} from '../Profile';
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import backgroundImg from '../../../assets/images/background.png';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {ProfileStatusWithHOC} from './ProfileStatus/ProfileStatusWithHOC';
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileForm} from './ProfileForm/ProfileForm';


const ProfileInfo = React.memo(function ProfileInfo(props: ProfilePropsType) {

    //local state for manage ability to change profile information of user
    const [editMode, setEditMode] = useState(false)

    //callback for the profile data component that switches the component to set mode for changing profile information of user
    const setEditModeToTrue = () => setEditMode(true)

    //callback for the profile data component that switches set mode to regular for profile information of user
    const setEditModeToFalse = () => setEditMode(false)

    // set background for profile component
    const divStyle = {backgroundImage: 'url(' + backgroundImg + ')'};

    //change avatar photo registered user
    const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.changePhoto(e.target.files[0])
        }
    }
    if (!props.profile) {
        return <Preloader/>
    } else return (
        <div className={styles.wrapper} style={divStyle}>
            <div className={styles.mainPhoto}>
                <div className={styles.photo}>
                    <img src={(props.profile?.photos.large == undefined && props.profile?.photos.large == null) ? userPhoto : props.profile.photos.large}
                        alt="Photo of user" className={styles.userPhoto}/>
                    {props.isOwner && <input type={'file'} onChange={onChangePhoto}/>}
                </div>
                <ProfileStatusWithHOC status={props.status} userID={props.profile.userId} updateUserStatus={props.updateUserStatus} authorizedUserID={props.authorizedUserID}/>
            </div>
            <div  className={styles.mainInfo}>
                {!editMode ? <ProfileData profile={props.profile} isOwner={props.isOwner}
                                          setEditModeToTrue={setEditModeToTrue}/> :
                    <ProfileForm updateProfile={props.updateProfile} setEditModeToFalse={setEditModeToFalse} initialValues={props.profile}/>}
            </div>
        </div>
    )

})

export default ProfileInfo;


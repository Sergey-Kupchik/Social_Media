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
    const setEditModeToFalse = () => setEditMode(true)

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
        <div className={styles.descriptionBlok} style={divStyle}>
            <img
                src={(props.profile?.photos.large == undefined && props.profile?.photos.large == null) ? userPhoto : props.profile.photos.large}
                alt="Photo of user" className={styles.userPhoto}/>
            {props.isOwner && <input type={'file'} onChange={onChangePhoto}/>}
            <div className={styles.mainInfo}>
                {/*<h3>{props.profile?.fullName} </h3>*/}
                {/*<span>{props.profile?.aboutMe?props.profile?.aboutMe:"About me: United State of America "}</span>*/}
                {/*<ProfileStatusWithHOC status={props.status} textAreaForUserStatus={props.textAreaForUserStatus} userID={props.profile.userId} showStatusTextInTextareaSuccess={props.showStatusTextInTextareaSuccess} updateUserStatus={props.updateUserStatus} authorizedUserID={props.authorizedUserID}/>*/}

                {!editMode?<ProfileData profile={props.profile} isOwner={props.isOwner} setEditModeToTrue={setEditModeToTrue}/>:<ProfileForm updateProfile={props.updateProfile} setEditModeToFalse={setEditModeToFalse}/>}
                <ProfileStatusWithHOC status={props.status} textAreaForUserStatus={props.textAreaForUserStatus}
                                      userID={props.profile.userId}
                                      showStatusTextInTextareaSuccess={props.showStatusTextInTextareaSuccess}
                                      updateUserStatus={props.updateUserStatus}
                                      authorizedUserID={props.authorizedUserID}/>
            </div>
        </div>

    )

})

export default ProfileInfo;


import React from 'react';
import styles from './ProfileInfo.module.css';
import {ProfilePropsType} from '../Profile';
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';


const ProfileInfo: React.FC<ProfilePropsType> = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else return <div>
        <div className={styles.img}>
            <img
                src="http://t3.gstatic.com/images?q=tbn:ANd9GcSGZixOf6Jx2wG29YrJGM4QGe9DXVWPJgz_7IwBjjSIHM3h0byU02kNdiSx8K4HpG_Eiz3Uxq6yDICJs7AZ-9c"></img>
        </div>
        <div className={styles.descriptionBlok}>
            <img src={(props.profile?.photos.large == undefined && props.profile?.photos.large == null) ? userPhoto: props.profile.photos.large} alt="Photo of user" className={styles.userPhoto}/>
            <h2>{props.profile?.fullName} </h2>
            <h4>{props.profile?.aboutMe} </h4>
            <ProfileStatus status={props.status} textAreaForUserStatus={props.textAreaForUserStatus} userID={props.profile.userId} showStatusTextInTextareaSuccess={props.showStatusTextInTextareaSuccess} updateUserStatus={props.updateUserStatus}/>
        </div>
    </div>
}

export default ProfileInfo;
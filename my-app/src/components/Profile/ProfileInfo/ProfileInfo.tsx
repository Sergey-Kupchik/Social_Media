import React from 'react';
import styles from './ProfileInfo.module.scss';
import {ProfilePropsType} from '../Profile';
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import backgroundImg from '../../../assets/images/background.png';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';
import {ProfileStatusWithHOC} from './ProfileStatus/ProfileStatusWithHOC';


const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
    const divStyle = {
        backgroundImage: 'url(' + backgroundImg+ ')',
    };

    if (!props.profile) {
        return <Preloader/>
    } else return(
        <div className={styles.descriptionBlok} style={divStyle}>
            <img src={(props.profile?.photos.large == undefined && props.profile?.photos.large == null) ? userPhoto: props.profile.photos.large} alt="Photo of user" className={styles.userPhoto}/>
            <div className={styles.mainInfo}>
                <h3>{props.profile?.fullName} </h3>
                <span>{props.profile?.aboutMe?props.profile?.aboutMe:"About me: United State of America "}</span>
                <ProfileStatusWithHOC status={props.status} textAreaForUserStatus={props.textAreaForUserStatus} userID={props.profile.userId} showStatusTextInTextareaSuccess={props.showStatusTextInTextareaSuccess} updateUserStatus={props.updateUserStatus} authorizedUserID={props.authorizedUserID}/>
            </div>
        </div>

    )

}

export default ProfileInfo;
import React from "react";
import s from './ProfileInfo.module.css';

type ProfileInfoType = {}
const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return <div className={s.profileInfo_wrapper}>
        <div className={s.img}>
            {/*<img*/}
            {/*    src="https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg"></img>*/}
        </div>
        <div className={s.descriptionBlok}>
            Avatar and Discription
        </div>
    </div>
}

export default ProfileInfo;
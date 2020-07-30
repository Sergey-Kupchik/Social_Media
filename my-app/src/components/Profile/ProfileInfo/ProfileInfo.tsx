import React from "react";
import s from './ProfileInfo.module.css';

type ProfileInfoType = {}
const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return <div>
        <div className={s.img}>
            <img
                src="http://t3.gstatic.com/images?q=tbn:ANd9GcSGZixOf6Jx2wG29YrJGM4QGe9DXVWPJgz_7IwBjjSIHM3h0byU02kNdiSx8K4HpG_Eiz3Uxq6yDICJs7AZ-9c"></img>
        </div>
        <div className={s.descriptionBlok}>
            avatar+discription
        </div>
    </div>
}

export default ProfileInfo;
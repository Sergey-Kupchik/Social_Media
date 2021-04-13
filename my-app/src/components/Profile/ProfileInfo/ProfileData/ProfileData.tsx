import {ProfileType} from '../../Profile';
import React from 'react';
import { AiFillFacebook,AiFillLinkedin,AiFillAmazonCircle,AiFillYoutube, AiFillSkype,AiOutlineGithub,AiFillTwitterCircle,AiFillInstagram,AiFillCheckCircle,AiFillCloseCircle} from "react-icons/ai"
import styleBar from './../../../Header/NavBar/NavBar.module.scss';

import styles from './ProfileData.module.scss';






//Types
type ProfileDataPropsType = { profile: ProfileType, isOwner: boolean, setEditModeToTrue: () => void }


//Component that display profile of user
export const ProfileData = React.memo(function ProfileData(props: ProfileDataPropsType) {
    const {profile, isOwner, setEditModeToTrue} = props
    const contacts = Object.keys(profile.contacts)

    return (<div className={styles.container}>
            <h3>{profile.fullName?profile.fullName:"No name"}</h3>
            <h5><span> {profile.aboutMe?profile.aboutMe:"About Me:"}</span></h5>
            <h5 className={styles.boolean}><span>Open for discussion:</span><span>{profile.lookingForAJob?<AiFillCheckCircle color={"#28a745"}/>:<AiFillCloseCircle color={"#8793a3"}/>}</span></h5>
            <h5><span>{profile.lookingForAJobDescription?profile.lookingForAJobDescription:"No description"}</span></h5>
            <ul className={`${styleBar.wrapper} ${styles.wrapper}`}>
                <li><a href={`${profile.contacts.facebook}`}><AiFillFacebook/></a></li>
                <li><a href={`${profile.contacts.mainLink}`}><AiFillLinkedin/></a></li>
                <li><a href={`${profile.contacts.vk}`}><AiFillAmazonCircle/></a></li>
                <li><a href={`${profile.contacts.youtube}`}><AiFillYoutube/></a></li>
                <li><a href={`${profile.contacts.website}`}><AiFillSkype/></a></li>
                <li><a href={`${profile.contacts.github}`}><AiOutlineGithub/></a></li>
                <li><a href={`${profile.contacts.instagram}`}><AiFillInstagram/></a></li>
                <li><a href={`${profile.contacts.twitter}`}><AiFillTwitterCircle/></a></li>
            </ul>
            {isOwner && <button onClick={setEditModeToTrue} className={styles.btn}>Settings</button>}
        </div>
    )
})

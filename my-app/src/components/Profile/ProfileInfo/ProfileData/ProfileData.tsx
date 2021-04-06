import {ProfileType} from '../../Profile';
import React from 'react';

//Types
type ProfileDataPropsType = { profile: ProfileType, isOwner: boolean, setEditModeToTrue: () => void }


//Component that display profile of user
export const ProfileData = React.memo(function ProfileData(props: ProfileDataPropsType) {
    const {profile, isOwner,setEditModeToTrue} = props
    const contacts = Object.keys(profile.contacts)

    return (<>
            <div><b>Full name:</b> {profile.fullName}</div>
            <div><b>About me:</b> {profile.aboutMe}</div>
            <div><b>Looking for a job:</b> {profile.lookingForAJob}</div>
            <div><b>Job Description:</b> {profile.lookingForAJobDescription}</div>
            <div><b>Contacts:</b>{contacts.map((c, index) => {
                // @ts-ignore
                return <Contact key={index} contactTitle={c} contactValue={profile.contacts[c]}/>
            })}</div>

            {isOwner && <button onClick={setEditModeToTrue}>Edit</button>}
        </>
    )
})

//Component that display contact params of user
const Contact = React.memo(function Contact(props: { contactTitle: string, contactValue: string | null }) {
    const {contactTitle, contactValue} = props
    return <div><b>{contactTitle}:</b> {contactValue}</div>
})
